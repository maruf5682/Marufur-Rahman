// Typing Script
var typed = new Typed('.typing', {
    strings: ["Web Developer", "Programmer", "Application Developer", "Software Engineer"],
    typeSpeed: 65,
    backSpeed: 70,
});

var typed = new Typed('.typing2', {
    strings: ["Web Developer", "Programmer", "Application Developer", "Software Engineer"],
    typeSpeed: 80,
    backSpeed: 85,
});



// show/hide faqs
let faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('faq_open');

        let icon = faq.querySelector('.faq_icon i');
        if (icon.className === "fa-solid fa-plus") {
            icon.className = "fa-solid fa-minus"
        }
        else {
            icon.className = "fa-solid fa-plus"
        }
    })
})


// ========nav menu event==========

let menu = document.querySelector(".nav_menu");
let menuBtn = document.querySelector('#open-menu-btn');
let closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none"
})

let closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);


// ===========================

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100);
})