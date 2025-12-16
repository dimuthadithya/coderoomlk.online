const fs = require('fs');
const path = require('path');

const FEEDBACK_FILE = path.join(__dirname, '../feedbcak.txt');
const JSON_FILE = path.join(__dirname, '../data/testimonials.json');

const DEFAULT_COURSE = 'Web Development';
const DEFAULT_UNIVERSITY = 'SLIATE Kegalle';

function processFeedback() {
  try {
    const content = fs.readFileSync(FEEDBACK_FILE, 'utf8');
    const lines = content.split('\n').filter((line) => line.trim() !== '');

    const testimonials = [];
    let currentSection = 0; // 0: Unknown, 1: First Batch Format, 2: Second Batch Format

    lines.forEach((line) => {
      if (line.includes('Timestamp')) {
        if (line.includes('Github username')) currentSection = 1;
        else if (line.includes('Suggestions')) currentSection = 2;
        return;
      }

      // Skip title lines or empty lines
      if (line.startsWith('Coderoom') || line.trim().length < 5) return;

      const parts = line.split('\t');

      // Format 1: Timestamp | Name | Feedback | Github
      if (currentSection === 1 && parts.length >= 3) {
        const name = parts[1]?.trim();
        const text = parts[2]?.trim();
        const github = parts[3]?.trim() || '';

        if (name && text) {
          testimonials.push({
            name: cleanName(name),
            github: github,
            text: cleanText(text),
            course: DEFAULT_COURSE,
            university: DEFAULT_UNIVERSITY,
          });
        }
      }
      // Format 2: Timestamp | Feedback | Suggestions | [Optional] | Name
      else if (currentSection === 2 && parts.length >= 2) {
        // Determine Name index (usually last)
        let nameIndex = parts.length - 1;
        // Sometimes there are empty tabs at end
        while (parts[nameIndex] === '' && nameIndex > 0) nameIndex--;

        const name = parts[nameIndex]?.trim();
        const text = parts[1]?.trim(); // Feedback is usually 2nd col

        // Github is likely missing in this format, leaving blank
        const github = '';

        if (name && text && !name.includes('Timestamp')) {
          // Double check
          testimonials.push({
            name: cleanName(name),
            github: github,
            text: cleanText(text),
            course: DEFAULT_COURSE,
            university: DEFAULT_UNIVERSITY,
          });
        }
      }
    });

    // Filter out duplicates based on Name + Text (basic dedup)
    const uniqueTestimonials = testimonials.filter(
      (v, i, a) =>
        a.findIndex(
          (t) =>
            t.name === v.name &&
            t.text.substring(0, 20) === v.text.substring(0, 20)
        ) === i
    );

    fs.writeFileSync(JSON_FILE, JSON.stringify(uniqueTestimonials, null, 2));
    console.log(
      `Successfully converted ${uniqueTestimonials.length} testimonials to JSON.`
    );
  } catch (error) {
    console.error('Error processing feedback:', error);
  }
}

function cleanName(name) {
  return name.replace(/[".]/g, '').trim(); // Remove basic noise
}

function cleanText(text) {
  return text.replace(/^"|"$/g, '').trim(); // Remove surrounding quotes
}

processFeedback();
