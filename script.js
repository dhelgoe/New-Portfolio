// Add event listener to project links
const projectLinks = document.querySelectorAll('.project a');
projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = link.href;
    });
});

window.addEventListener('scroll', function() {
    var backToTopButton = document.querySelector('.back-to-top');

    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

