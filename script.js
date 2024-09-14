// Simple script for scrolling and showing the arrow
document.addEventListener("scroll", function() {
    const arrow = document.querySelector('.scroll-indicator');
    if (window.scrollY > 50) {
        arrow.style.display = 'none';
    } else {
        arrow.style.display = 'block';
    }
});
