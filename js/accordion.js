const accordions = document.querySelectorAll(".accordion")

accordions.forEach(acc => {
    acc.addEventListener("click", function() {
        this.classList.toggle("active")

        const panel = this.nextElementSibling;
        panel.classList.toggle("open")
        if (panel.classList.contains("open")) {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } else {
            panel.style.maxHeight = null;
        }

    });
})


