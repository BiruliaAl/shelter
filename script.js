'use strict'

import showMenu from './components/menu_burger.js';
import { showCard } from './components/card_pets.js';
import { renderModalWindow } from './components/modal.js';
import { createSlider} from './components/slider.js';

document.addEventListener('DOMContentLoaded', function(){

//меню - бургер 
    showMenu()


//генерация карточек животных на страницу через класс 
    
    showCard()

//Реализация модальных окон на обеих страницах

    renderModalWindow()

//вывод поп-пап на обеих страницах 

    async function load() {
        let card = await import('./components/card_pets.js');
        card.showCard();
        const petCardArr = document.querySelectorAll('.pets_modal_item');
        const petModalArr = document.querySelectorAll('.pets_modal_item');

        console.log(petCardArr)
        console.log(petModalArr)
    }
    load()

    function showModal() {
        const  modalClose = document.querySelector('.modal_cross'),
                modalItem = document.querySelector('.pets_modal_items'),
                shadowItem = document.querySelector('.shadow');
    
            shadowItem.hidden = false;
            document.body.style.overflow = "hidden";
            
            modalClose.addEventListener('click', () => {
                modalItem.innerHTML = "";
                document.body.style.overflow = "";
                shadowItem.hidden = true;
            })
    
            shadowItem.addEventListener('click', () => {
                modalItem.innerHTML = "";
                document.body.style.overflow = "";
                shadowItem.hidden = true;
            })
    }

//слайдер 
    
    createSlider()

//Реализация пагинации на странице Pets:



}, false);

