const fs = require('fs');
const path = require('path');

const GITHUB_USERNAME = 'dimuthadithya';
const INSTRUCTOR_FILE = path.join(__dirname, '../data/instructor.json');

async function fetchGithubData() {
  try {
    console.log(`Fetching data for user: ${GITHUB_USERNAME}...`);
    
    // Fetch User Profile
    const profileResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!profileResponse.ok) throw new Error('Failed to fetch profile');
    const profile = await profileResponse.json();

    // Fetch Repositories
    const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
    if (!reposResponse.ok) throw new Error('Failed to fetch repos');
    const repos = await reposResponse.json();

    // Calculate stats
    // const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
    const totalRepos = profile.public_repos;
    const followers = profile.followers;

    // Read existing instructor.json
    let instructorData = {};
    if (fs.existsSync(INSTRUCTOR_FILE)) {
        instructorData = JSON.parse(fs.readFileSync(INSTRUCTOR_FILE, 'utf8'));
    }

    // Merge/Update fields
    instructorData.image = profile.avatar_url;
    instructorData.bio = profile.bio || instructorData.bio; // Fallback to existing if empty
    
    // Update Stats (Projects & Followers)
    if (instructorData.stats) {
        instructorData.stats = instructorData.stats.map(stat => {
            if (stat.label === "Projects") {
                return { ...stat, value: `${totalRepos}+` };
            }
            if (stat.label === "Followers") {
                 return { ...stat, value: `${followers}+` };
            }
            return stat;
        });
    }

    // Update Github & Twitter Links if present in socials
    if (instructorData.socials) {
        instructorData.socials = instructorData.socials.map(social => {
            if (social.platform === 'github') return { ...social, url: profile.html_url };
            if (social.platform === 'twitter' && profile.twitter_username) return { ...social, url: `https://twitter.com/${profile.twitter_username}` };
            return social;
        });
    }

    // Write back to file
    fs.writeFileSync(INSTRUCTOR_FILE, JSON.stringify(instructorData, null, 2));
    console.log(`Successfully updated ${INSTRUCTOR_FILE}`);
    console.log(`Updated Stats -> Projects: ${totalRepos}+, Followers: ${followers}+`);

  } catch (error) {
    console.error('Error fetching GitHub data:', error);
  }
}

fetchGithubData();
