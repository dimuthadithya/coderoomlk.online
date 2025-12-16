const fs = require('fs');
const path = require('path');

const GITHUB_USERNAME = 'dimuthadithya';
const OUTPUT_FILE = path.join(__dirname, '../data/github-data.json');

async function fetchGithubData() {
  try {
    console.log(`Fetching data for user: ${GITHUB_USERNAME}...`);
    
    // Fetch User Profile
    const profileResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!profileResponse.ok) throw new Error('Failed to fetch profile');
    const profile = await profileResponse.json();

    // Fetch Repositories to calculate stars/languages (optional but cool)
    const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
    if (!reposResponse.ok) throw new Error('Failed to fetch repos');
    const repos = await reposResponse.json();

    // Calculate stats
    const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
    const totalRepos = profile.public_repos;
    const topLanguage = calculateTopLanguage(repos);

    const data = {
      username: profile.login,
      name: profile.name,
      avatar_url: profile.avatar_url,
      bio: profile.bio,
      location: profile.location,
      blog: profile.blog,
      twitter_username: profile.twitter_username,
      public_repos: totalRepos,
      followers: profile.followers,
      following: profile.following,
      total_stars: totalStars,
      top_language: topLanguage,
      profile_url: profile.html_url,
      fetched_at: new Date().toISOString()
    };

    // Ensure data directory exists
    const dataDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(dataDir)){
        fs.mkdirSync(dataDir, { recursive: true });
    }

    // Write to file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(data, null, 2));
    console.log(`Successfully saved GitHub data to ${OUTPUT_FILE}`);
    
    // Preview the data
    console.log('--- Fetched Data ---');
    console.log(`Name: ${data.name}`);
    console.log(`Bio: ${data.bio}`);
    console.log(`Stars: ${data.total_stars}`);
    console.log(`Followers: ${data.followers}`);

  } catch (error) {
    console.error('Error fetching GitHub data:', error);
  }
}

function calculateTopLanguage(repos) {
    const langs = {};
    repos.forEach(repo => {
        if (repo.language) {
            langs[repo.language] = (langs[repo.language] || 0) + 1;
        }
    });
    // Sort by count
    const sorted = Object.entries(langs).sort((a,b) => b[1] - a[1]);
    return sorted.length > 0 ? sorted[0][0] : 'N/A';
}

fetchGithubData();
