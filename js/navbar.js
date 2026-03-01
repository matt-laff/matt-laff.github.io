
const themes = ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9'];
let theme_idx = 0;
const menuButton = document.getElementById('menu-toggle');

document.getElementById('toggle').addEventListener('click', function() {
    theme_idx = (theme_idx + 1) % themes.length;
    document.documentElement.dataset.theme = themes[theme_idx];
    // button.textContent = "Theme: " + themes[theme_idx];

}); 

menuButton.addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    const blur = document.querySelector('.blur');
    navLinks.classList.toggle('active');
    navbar.classList.toggle('menu-open');
    blur.classList.toggle('active');

});