
const themes = ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9'];
let theme_idx = 0;
const menuButton = document.getElementById('menu-toggle');
const blurDiv = document.querySelector('.blur')

document.getElementById('theme-toggle').addEventListener('click', function() {
    theme_idx = (theme_idx + 1) % themes.length;
    document.documentElement.dataset.theme = themes[theme_idx];
    document.body.classList.toggle('dark-mode')
    // button.textContent = "Theme: " + themes[theme_idx];

}); 

menuButton.addEventListener('click', function() {

    document.body.classList.toggle("menu-open")

});

blurDiv.addEventListener('click', () => {
    document.body.classList.toggle("menu-open")
}
)

