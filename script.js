const navMenu = document.getElementById('navMenu');
const navToggle = document.getElementById('navToggle');
const navClose = document.getElementById('navClose');

navToggle.addEventListener('click', () => {
    navMenu.classList.add('show');
});

navClose.addEventListener('click', () => {
    navMenu.classList.remove('show');
});