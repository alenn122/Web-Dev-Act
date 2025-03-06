// RESPONSIVE NAVMENU
const navMenu = document.querySelector("#navmenu");
const navLinks = document.querySelector(".nav-links");

navMenu.onclick = () => {
    navMenu.classList.toggle("fa-xmark");
    navLinks.classList.toggle("open");
}

window.onscroll = () => {
    navMenu.classList.remove("fa-xmark");
    navLinks.classList.remove("open");
}

// SCROLL REVEAL
const sr = ScrollReveal({
    origin: 'left',
    distance: '70px',
    duration: 1000,
    reset: true
});

sr.reveal ("header", {delay:100});
sr.reveal ("#home", {delay:100});
sr.reveal (".tech-logo", {delay:100});
sr.reveal ("#about", {delay:100});
sr.reveal ("#project", {delay:100});
sr.reveal ("#portfolio", {delay:100});
