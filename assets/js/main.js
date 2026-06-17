document.addEventListener('DOMContentLoaded', () => {
    console.log('ZZZ Info Hub Loaded');
    
    // Smooth scroll or other interactions can be added here
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            // Optional hover sound or effect
        });
    });
});
