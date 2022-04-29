const menuResponsive = document.querySelector('.menuResponsive');
const menu = document.querySelector('.menu');

menuResponsive.addEventListener('click', () => {
    menuResponsive.classList.toggle('active');
    menu.classList.toggle('active');
});