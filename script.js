
import showMenu from './components/menu_burger.js';
import { showCard } from './components/card_pets.js';
import { renderModalWindow } from './components/modal.js';
import { createSlider } from './components/slider.js';

document.addEventListener('DOMContentLoaded', function(){

//меню - бургер 
    showMenu()

//генерация карточек животных на страницу  
    showCard()
       
//Реализация модальных окон на обеих страницах

    renderModalWindow()

//slider

async function init() {
    await showCard()
}

init().then(() => {
    createSlider()
})

//Реализация пагинации на странице Pets

}, false);

