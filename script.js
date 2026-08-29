const themeToggleButton = document.getElementById('theme-toggle');
const bodyElement = document.body;
const burgerMenu = document.getElementById('burger-menu');
const navMenu = document.getElementById('nav-menu');

themeToggleButton.addEventListener('click', function() {
    bodyElement.classList.toggle('light-theme');
    
    if (bodyElement.classList.contains('light-theme')) {
        themeToggleButton.textContent = "Switch to Dark Roast";
    } else {
        themeToggleButton.textContent = "Switch to Light Roast";
    }
});

burgerMenu.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});