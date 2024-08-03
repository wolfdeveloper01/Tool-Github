document.addEventListener('DOMContentLoaded', () => {
    // Ensure all sections start visible
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('hidden');
    });

    // Initialize button text for all sections
    document.querySelectorAll('.toggle-btn').forEach(button => {
        button.textContent = 'Ocultar';
    });
});

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const isHidden = section.classList.contains('hidden');
    
    section.classList.toggle('hidden', !isHidden);
    
    // Change the button text based on visibility
    const button = section.querySelector('.toggle-btn');
    if (button) {
        button.textContent = isHidden ? 'Ocultar' : 'Mostrar';
    }
}

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
    const svgInput = document.getElementById('svg-input').value;
    const svgOutput = document.getElementById('svg-output');
    const sourceType = document.querySelector('input[name="svg-source"]:checked').value;

    if (sourceType === 'url') {
        fetch(svgInput)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.text();
            })
            .then(svgContent => {
                // Clean up the SVG content
                svgContent = svgContent.replace(/<!DOCTYPE[^>]*>/i, ''); // Remove DOCTYPE
                svgContent = svgContent.replace(/<\?xml[^>]*>/i, '');  // Remove XML declaration
                svgOutput.innerHTML = svgContent;
            })
            .catch(error => {
                svgOutput.innerHTML = `<p style="color: red;">Erro ao carregar o SVG: ${error.message}</p>`;
            });
    } else if (sourceType === 'xml') {
        // Clean up the SVG content
        let cleanedSvg = svgInput.replace(/<!DOCTYPE[^>]*>/i, ''); // Remove DOCTYPE
        cleanedSvg = cleanedSvg.replace(/<\?xml[^>]*>/i, '');  // Remove XML declaration
        svgOutput.innerHTML = cleanedSvg;
    }
}
