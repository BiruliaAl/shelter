
function renderModalWindow() {
    //не приходят картинки при запросе через URL
    // fetch("https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/shelter/pets.json")
    fetch('pets.json')
        .then(response => response.json())
        .then((petsModal) => {
            const wrapper = document.querySelector('.pets_modal_items');
            let out = ''         
            for(let petModal of petsModal) { 
                out += `
                    <div class="pets_modal_item pets_modal_item__hidden"> 
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
}

export { renderModalWindow }

    