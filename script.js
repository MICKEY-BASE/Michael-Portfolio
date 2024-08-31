let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
     menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let selections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    selections.forEach(sec => {
     let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id')


    if (top => offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a [href*a' + id + ']').classList.add('active');

        });
        sec.classList.add('show-animate');
    }
    else {
        sec.classList.remove('show-animate');
    }
});
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scroll > 100);

// remove toggle icon and navbar when click navbar links(scroll)
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.scroll = () => {
    themeToggler.classList.remove('active');

}

var themeToggler = document.querySelector(".theme-toggler");
var themeBtn = document.querySelector(".toggle-btn");

themeBtn.onclick = ()=>{
    themeToggler.classList.toggle("active");
}
document.querySelectorAll(".theme-toggler .theme-btn").forEach(
    (btn) => {
       btn.onclick = ()=>{
        let color = btn.style.background;
        document.querySelector(":root").style.setProperty("--margin-color", color);
       }
    }

    
)