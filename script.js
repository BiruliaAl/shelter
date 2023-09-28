
import showMenu from './components/menu_burger.js';
import { showCard } from './components/card_pets.js';
import { renderModalWindow } from './components/modal.js';

document.addEventListener('DOMContentLoaded', function(){

//меню - бургер 
    showMenu()

//генерация карточек животных на страницу  
    showCard()
       
//Реализация модальных окон на обеих страницах

    renderModalWindow()

//Реализация пагинации на странице Pets:пше

}, false);

