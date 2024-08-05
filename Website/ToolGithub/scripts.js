document.addEventListener('DOMContentLoaded', () => {
    // Ocultar todas as seções inicialmente
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('d-none');
    });

    // Configurar texto dos botões de alternância
    document.querySelectorAll('.btn-toggle').forEach(button => {
        button.textContent = 'Amostra';
    });
});

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const isHidden = section.classList.contains('d-none');
    
    // Alternar visibilidade
    section.classList.toggle('d-none', !isHidden);
    
    // Atualizar texto do botão com base na visibilidade
    const button = document.getElementById(`${sectionId}-toggle`);
    if (button) {
        button.textContent = isHidden ? 'Oculta' : 'Amostra';
    }
}

function displayReadme() {
    const readmeInput = document.getElementById('readme-input').value;
    const readmeOutput = document.getElementById('readme-output');
    const readmeSection = document.getElementById('readme-section');

    readmeOutput.innerHTML = marked(readmeInput); // Use a biblioteca Marked.js para renderizar Markdown

    // Mostrar a seção de visualização
    readmeSection.classList.remove('d-none');
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
                // Limpar o conteúdo do SVG
                svgContent = svgContent.replace(/<!DOCTYPE[^>]*>/i, ''); // Remover DOCTYPE
                svgContent = svgContent.replace(/<\?xml[^>]*>/i, '');  // Remover declaração XML
                svgOutput.innerHTML = svgContent;
            })
            .catch(error => {
                svgOutput.innerHTML = `<p class="text-danger">Erro ao carregar o SVG: ${error.message}</p>`;
            });
    } else if (sourceType === 'xml') {
        // Limpar o conteúdo do SVG
        let cleanedSvg = svgInput.replace(/<!DOCTYPE[^>]*>/i, ''); // Remover DOCTYPE
        cleanedSvg = cleanedSvg.replace(/<\?xml[^>]*>/i, '');  // Remover declaração XML
        svgOutput.innerHTML = cleanedSvg;
    }
}
