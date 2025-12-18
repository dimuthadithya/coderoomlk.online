const fs = require('fs');
const path = require('path');

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTYDTWrzNe9BvPz7bJxCQfohfTynfuflucxKHaKEsNjQkuEqFguJXFif1vu2xc_7ZrZSmwwxYF9Pqv1/pub?gid=1711080674&single=true&output=csv';
const STATE_FILE = path.join(__dirname, '../data/fetch-state.json');
const OUTPUT_FILE = path.join(__dirname, '../data/testimonials.json');

async function main() {
  try {
    // 1. Read existing data to preserve 'verified' status
    let existingData = [];
    if (fs.existsSync(OUTPUT_FILE)) {
        try {
            existingData = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));
        } catch (e) {
            console.warn("Could not parse existing feedback file, starting fresh.");
        }
    }

    // 2. Read last fetched timestamp
    let lastFetchedTime = 0; // Epoch if no state
    if (fs.existsSync(STATE_FILE)) {
        try {
            const state = JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
            if (state.lastFetchedTime) {
                lastFetchedTime = new Date(state.lastFetchedTime).getTime();
            }
        } catch (e) {
            console.warn("Could not parse state file, assuming full fetch.");
        }
    }
    
    // NOTE: Cannot infer lastFetchedTime from existingData as testimonials.json doesn't store timestamps.
    // Relying solely on STATE_FILE.
    console.log(`Last fetched time from state: ${new Date(lastFetchedTime).toLocaleString()}`);

    console.log('Fetching CSV data...');
    const response = await fetch(CSV_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch CSV: ${response.statusText}`);
    }
    const csvText = await response.text();
    
    console.log('Parsing CSV...');
    const rows = parseCSV(csvText);
    
    if (rows.length === 0) {
      console.log('No data found in CSV.');
      return;
    }

    // Assumptions: First row defines headers.
    const headers = rows[0].map(h => h.trim());
    
    let newRecordsCount = 0;
    let latestTimeInBatch = lastFetchedTime;

    // Process rows
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (row.length === 0) continue; 

        // Map row to simple object for data extraction
        const csvRow = {};
        headers.forEach((header, index) => {
            csvRow[header] = row[index] || '';
        });

        // Parse timestamp
        // Format example: 12/16/2025 14:14:03
        const timestampStr = csvRow['Timestamp'];
        if (!timestampStr) continue;
        
        const recordTime = new Date(timestampStr).getTime();
        
        // Validation check for invalid dates
        if (isNaN(recordTime)) {
            console.warn(`Skipping row with invalid date: ${timestampStr}`);
            continue;
        }

        // Incremental check: Only add if NEWER than last fetched
        if (recordTime > lastFetchedTime) {
            
            // Map to Testimonial Schema:
            // { name, github, text, course, university, verified }
            const testimonial = {
                name: csvRow['Name'] || "",
                github: csvRow['Github Username'] || "",
                text: csvRow['Feedback'] || "",
                course: "", 
                university: "",
                verified: false
            };

            existingData.push(testimonial);
            newRecordsCount++;
            
            // Track the latest time seen in this batch
            if (recordTime > latestTimeInBatch) {
                latestTimeInBatch = recordTime;
            }
        }
    }

    if (newRecordsCount > 0) {
        console.log(`Found ${newRecordsCount} new records.`);
        
        // Save to testimonials.json
        // We do NOT re-sort by timestamp because the file might be manually ordered or grouped. 
        // Just appending new ones.
        
        console.log(`Saving updated data (${existingData.length} total records) to ${OUTPUT_FILE}...`);
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(existingData, null, 2));
        
        // Update state
        const newState = { lastFetchedTime: new Date(latestTimeInBatch).toISOString() }; // Store as ISO string
        fs.writeFileSync(STATE_FILE, JSON.stringify(newState, null, 2));
        console.log(`Updated fetch state to: ${newState.lastFetchedTime}`);
    } else {
        console.log('No new records found since last fetch.');
        
        // If state file doesn't exist, create it with the used timestamp to ensure consistency
        if (!fs.existsSync(STATE_FILE)) {
             const newState = { lastFetchedTime: new Date(lastFetchedTime).toISOString() };
             fs.writeFileSync(STATE_FILE, JSON.stringify(newState, null, 2));
             console.log(`Created state file with timestamp: ${newState.lastFetchedTime}`);
        }
    }

  } catch (err) {
    console.error('Error in fetch script:', err);
    process.exit(1);
  }
}

/**
 * Parses a CSV string into a 2D array, handling quoted fields and newlines within quotes.
 * @param {string} text 
 * @returns {string[][]}
 */
function parseCSV(text) {
  const rows = [];
  let currentRow = [];
  let curVal = '';
  // We assume the file might start with a byte order mark which we should probably ignore if present, 
  // but usually response.text() handles encoding.
  
  let insideQuote = false;
  
  // Normalize line endings to \n just in case, but keep \r inside quotes? 
  // Better to iterate char by char.
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i+1];
    
    if (char === '"') {
      if (insideQuote && nextChar === '"') {
        // Escaped quote "" -> "
        curVal += '"';
        i++; // Skip the next quote
      } else {
        insideQuote = !insideQuote;
      }
    } else if (char === ',' && !insideQuote) {
      currentRow.push(curVal);
      curVal = '';
    } else if ((char === '\r' || char === '\n') && !insideQuote) {
      // Handle CRLF or LF
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      
      currentRow.push(curVal);
      rows.push(currentRow);
      
      currentRow = [];
      curVal = '';
    } else {
      curVal += char;
    }
  }
  
  // Helper to push the last row if valid
  if (currentRow.length > 0 || curVal.length > 0) {
    currentRow.push(curVal);
    rows.push(currentRow);
  }
  
  return rows;
}

main();
