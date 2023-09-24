import { showCard } from './card_pets.js';

async function renderModalWindow() {
    //не приходят картинки при запросе через URL
    // fetch("https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/shelter/pets.json")
    await fetch('pets.json')
        .then(response => response.json())
        .then((petsModal) => {
            const wrapper = document.querySelector('.pets_modal_items');
            let out = ''         
            for(let petModal of petsModal) { 
                out += `
                    <div class="pets_modal_item" hidden > 
                        <div class="modal_cross">
                            <img src="./img/main_img/Vector.png" alt="cross">
                        </div>
                        <div class="pets_modal_img">
                            <img src=${petModal.img} alt=${petModal.type}>
                        </div>
                        <div>
                        <h3>${petModal.name}</h3>
                        <div>${petModal.type} - ${petModal.breed}</div>
                        <p>${petModal.description}</p>
                            <ul>
                            <li><span>Age:</span> ${petModal.age}</li>
                            <li><span>Inoculations:</span>${petModal.inoculations} </li>
                            <li><span>Diseases:</span>${petModal.diseases }</li>
                            <li><span>Parasites:</span>${petModal.parasites}</li>
                        </ul>
                        </div>
                    </div>
                    `
            }
          wrapper.innerHTML = out
        })
        const petModalArr = document.querySelectorAll('.pets_modal_item');
        return petModalArr
}
renderModalWindow()

let petCardArr = []; // = document.querySelector('.pets_slider_item'),
let modalArr = []; // = document.querySelector('.pets_modal_items'),

    showCard()
        .then((card) => {
            card.forEach(item => {
                petCardArr.push(item)
            });             ;
            return petCardArr
        })
    console.log(petCardArr) // [pets_slider_item]
    
    renderModalWindow()
        .then((modal) => {
            modal.forEach(item => {
                modalArr.push(item)
            });
            return modalArr
        })
    console.log(modalArr) // [pets_modal_item]

    console.log(petCardArr[0]) // undefined 
    console.log(modalArr[0]) // undefined 

    function openModalWindow() {

        const parentModal = document.querySelector('.pets_wrapper'),
            modalClose = document.querySelector('.modal_cross'), //созданный динамически крестик не получаем???
            shadowItem = document.querySelector('.shadow');

        console.log(modalClose)

        function showTabContent(i = 0) {
            modalArr[i].removeAttribute([hidden]); // элемент массива undefined 
            shadowItem.hidden = false;
            document.body.style.overflow = "hidden";
        }
        showTabContent()
    
        parentModal.addEventListener('click', (event) => {
            const target = event.target;
            if(target && target.matches(".pets_slider_item")) {
                petCardArr.forEach((item, i) => {
                    if (target == item) {
                        showTabContent(i); 
                    }
                })
            }   
        })
    }

    openModalWindow()


export { renderModalWindow }

const arr = [5, 6, 11, 20, 3];
 
    

//         function showModal() {
//             const  modalClose = document.querySelector('.modal_cross'),
//                     modalItem = document.querySelector('.pets_modal_items'),
//                     shadowItem = document.querySelector('.shadow');
        
//                 shadowItem.hidden = false;
//                 document.body.style.overflow = "hidden";
                
//                 modalClose.addEventListener('click', () => {
//                     modalItem.innerHTML = "";
//                     document.body.style.overflow = "";
//                     shadowItem.hidden = true;
//                 })
        
//                 shadowItem.addEventListener('click', () => {
//                     modalItem.innerHTML = "";
//                     document.body.style.overflow = "";
//                     shadowItem.hidden = true;
//                 })
//         }
// }



