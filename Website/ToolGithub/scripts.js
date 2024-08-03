function displayReadme() {
    const readmeInput = document.getElementById('readme-input').value;
    const readmeOutput = document.getElementById('readme-output');
    readmeOutput.innerHTML = marked(readmeInput); // Use a library like Marked.js to render Markdown
}

function updateContributionStats() {
    const username = document.getElementById('contribution-username').value;
    const statsContainer = document.getElementById('contribution-stats');
    statsContainer.innerHTML = `<img src="https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&count_private=true&include_all_commits=true&theme=radical" alt="Contribution Statistics">`;
}

function updateLanguageStats() {
    const username = document.getElementById('language-username').value;
    const statsContainer = document.getElementById('language-stats');
    statsContainer.innerHTML = `<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&hide=html&layout=compact&theme=radical" alt="Language Statistics">`;
}

function displaySvg() {
    const svgUrl = document.getElementById('svg-url').value;
    const svgOutput = document.getElementById('svg-output');
    svgOutput.innerHTML = `<embed src="${svgUrl}" type="image/svg+xml">`;
}
