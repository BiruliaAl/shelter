
import showMenu from './components/menu_burger.js';
import { showCard } from './components/card_pets.js';
import { renderModalWindow } from './components/modal.js';
import { createSlider} from './components/slider.js';

document.addEventListener('DOMContentLoaded', function(){

//меню - бургер 
    showMenu()

//генерация карточек животных на страницу  
let petCardArr = [];

    showCard()
        .then((card) => {
            card.forEach(item => {
                petCardArr.push(item)
            });             ;
            return petCardArr
        })
    console.log(petCardArr) // получили массив карточек животных 

//Реализация модальных окон на обеих страницах

let modalArr = [];

    renderModalWindow()
        .then((modal) => {
            modal.forEach(item => {
                modalArr.push(item)
            });
            return modalArr
        })
        console.log(modalArr) //получили массив модалок 

//вывод поп-пап на обеих страницах 
    
   

//слайдер 
    
    createSlider()

//Реализация пагинации на странице Pets:пше

}, false);

