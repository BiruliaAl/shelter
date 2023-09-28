import { showCard } from './card_pets.js';

async function init() {
    await showCard()
}

init().then(() => {
    createPagination()
})

function createPagination() {
    const countPage = 6;
    let currentPage;
    const buttonFirst = document.querySelector('[data-btn1]');
    const buttonPrev = document.querySelector('[data-btn2]');
    const buttonCount = document.querySelector('[data-count]');
    const buttonNext = document.querySelector('[data-btn3]');
    const buttonEnd = document.querySelector('[data-btn4]');

    
     // const petsArr2 = petsArr.concat(petsArr, petsArr, petsArr, petsArr, petsArr);//массив 
     const mediaMax = window.matchMedia('(min-width: 769px)');
     const mediaMiddle =  window.matchMedia('(max-width: 768px)');
     const mediaLittle =  window.matchMedia('(max-width: 550px)');
     const paginationNav = document.querySelectorAll('.our_pets_nav_item');
     const paginatWrapper = document.querySelectorAll('.our_pets_slider__wrap');//доступ к кнопкам навигации

     buttonFirst.addEventListener('click', buttonFirstClick);
     buttonPrev.addEventListener('click', buttonPrevClick);
     buttonNext.addEventListener('click', buttonNextClick);
     buttonEnd.addEventListener('click', buttonEndClick);

     function buttonFirstClick() {
        currentPage = 1;
        buttonCount.textContent = currentPage;
        Showcase.
     }

}

   

    