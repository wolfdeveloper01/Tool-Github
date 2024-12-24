document.addEventListener('DOMContentLoaded', () => {
            const typewriter = document.getElementById('typewriter');
            const texts = ['Tool Github', 'Tool from Developer'];
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            function type() {
                const currentText = texts[textIndex];
                let displayText = currentText.substring(0, charIndex);

                if (isDeleting) {
                    displayText = currentText.substring(0, charIndex);
                    charIndex--;
                } else {
                    displayText = currentText.substring(0, charIndex + 1);
                    charIndex++;
                }

                typewriter.textContent = displayText;

                if (!isDeleting && charIndex === currentText.length) {
                    setTimeout(() => isDeleting = true, 1000);
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                }

                setTimeout(type, isDeleting ? 50 : 150);
            }

            type();
        });
