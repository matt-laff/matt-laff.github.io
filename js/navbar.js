
const menuButton = document.getElementById('menu-toggle');
const blurDiv = document.querySelector('.blur')



function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    let attr = "light-mode"
    if (savedTheme) {
        attr = savedTheme
        if (savedTheme == 'dark-mode') {
            document.body.classList.toggle('dark-mode')
        }
    }
    document.documentElement.setAttribute("data-theme", attr);
}

document.getElementById('theme-toggle').addEventListener('click', function() {
    const dm = document.body.classList.toggle('dark-mode')
    if (dm) {
        setTheme("dark-mode")
    }
    else {
        setTheme("light-mode")
    }


}); 

menuButton.addEventListener('click', function() {

    document.body.classList.toggle("menu-open")

});

blurDiv.addEventListener('click', () => {
    document.body.classList.toggle("menu-open")
}
)


loadTheme();