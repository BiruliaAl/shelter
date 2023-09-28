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
                            <div>${petModal.type} - ${petModal.breed}
                            </div>
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

    async function init() {
        petCardArr = await showCard();
        modalArr = await renderModalWindow();
    }

    init().then(() => {
        openModalWindow()
        clouseModalWindow()
    })

    function openModalWindow() {

        const parentModal = document.querySelector('.pets_wrapper'), 
            shadowItem = document.querySelector('.shadow');

        parentModal.addEventListener('click', (event) => {
            const target = event.target;
            if(target && target.matches(".pets_slider_item")) {
                const id = +event.target.dataset.id;

                petCardArr.forEach((item, i) => {
                    if (id === i + 1) {
                        modalArr[i].removeAttribute('hidden'); 
                        shadowItem.hidden = false;
                        document.body.style.overflow = "hidden"; 
                    }
                })
            }   
        })
    }

    function clouseModalWindow() {
        const parentModal = document.querySelector('.pets_wrapper'), 
              shadowItem = document.querySelector('.shadow');

        parentModal.addEventListener('click', (event) => {
            const target = event.target;
            if( target && target.matches(".modal_cross")) {
                modalArr.forEach(item => {
                    item.setAttribute("hidden", "hidden");
                })
                shadowItem.hidden = true;
                document.body.style.overflow = "";
            }
        })
        
    }


    export { renderModalWindow }



