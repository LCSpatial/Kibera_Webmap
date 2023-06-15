
    // Navigation
        // Responsive Toggle Navigation =============================================
        let mobileIcon = document.querySelector('.mobileIcon');
        let nav = document.querySelector('.overlay-menu');

        mobileIcon.addEventListener('click', () => {
            if (nav.style.transform != 'translateX(0%)') {
                nav.style.transform = 'translateX(0%)';
                nav.style.transition = 'transform 0.2s ease-out';
            } else { 
                nav.style.transform = 'translateX(-100%)';
                nav.style.transition = 'transform 0.2s ease-out';
            }
        });


        // Toggle Menu Icon ========================================
        let toggleIcon = document.querySelector('.mobileIcon');

        toggleIcon.addEventListener('click', () => {
            if (toggleIcon.className != 'mobileIcon toggle') {
                toggleIcon.className += ' toggle';
            } else {
                toggleIcon.className = 'mobileIcon';
            }
        });
