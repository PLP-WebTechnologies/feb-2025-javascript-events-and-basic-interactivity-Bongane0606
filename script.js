document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check for saved user preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    }
    
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
    });
    
    // Image gallery functionality
    const galleryButtons = document.querySelectorAll('.gallery-btn');
    
    galleryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const gallery = this.closest('.stop-content').querySelector('.gallery');
            const images = gallery.querySelectorAll('img');
            let currentIndex = 0;
            
            // Find which image is currently active
            images.forEach((img, index) => {
                if (img.classList.contains('active')) {
                    currentIndex = index;
                    img.classList.remove('active');
                }
            });
            
            // Move to next image or loop back
            const nextIndex = (currentIndex + 1) % images.length;
            images[nextIndex].classList.add('active');
            
            // Update button text
            if (nextIndex === images.length - 1) {
                this.textContent = 'View First Photo';
            } else {
                this.textContent = 'Next Photo';
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
