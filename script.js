
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

//Реализация пагинации на странице Pets:пше

}, false);

