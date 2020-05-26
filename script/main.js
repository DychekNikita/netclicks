'use strict'

const leftMenu = document.querySelector('.left-menu'),
hamburger = document.querySelector('.hamburger'),
showsList = document.querySelector('.tv-shows__list');

hamburger.addEventListener('click', () => {
    leftMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
});

document.addEventListener('click', event => {
    if (!event.target.closest('.left-menu')) {
        leftMenu.classList.remove('openMenu');
        hamburger.classList.remove('open');
    };
});

leftMenu.addEventListener('click', event => {
    const target = event.target;
    const dropdown = target.closest('.dropdown');

    if (dropdown) {
        dropdown.classList.toggle('active');
        leftMenu.classList.add('openMenu');
        hamburger.classList.add('open');
    };
});

const showBacdrop = ({ target }) => {
    const tvCard = target.closest('.tv-card');

    if (!tvCard) return;
    const image = tvCard.querySelector('.tv-card__img');
    const link = image.dataset.backdrop;
    
    if (link) {
        image.dataset.backdrop = image.src;
        image.src = link;
        image.classList.toggle('tv-card__img_back')
    }
   
}; 

showsList.addEventListener('mouseover', showBacdrop, false);
showsList.addEventListener('mouseout', showBacdrop, false);