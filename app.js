//Menu
const menu = document.querySelector('#menu button');
const menuContainer = document.querySelector('#menu');
const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');
const nav = document.querySelector('nav');
const body = document.querySelector('body');

menu.addEventListener('click', function() {
    menuContainer.classList.toggle('menuToggle');
    line1.classList.toggle('line1Toggle');
    line2.classList.toggle('line2Toggle');
    line3.classList.toggle('line3Toggle');
    nav.classList.toggle('navToggle');
    body.classList.toggle('bodyToggle');
})