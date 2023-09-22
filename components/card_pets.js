const BUTTON_INFO = 'Learn more'

async function showCard() {
    //не приходят картинки при запросе через URL
    // fetch("https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/shelter/pets.json")
    await fetch('pets.json')
        .then(response => response.json())
        .then((pets) => {
            console.log(pets)
            const wrapper = document.querySelector('.pets_slider_items');
            let out = '';
            for(let pet of pets) {
                out += `
                    <div class="pets_slider_item our_pets_slider_item"> 
                        <img src=${pet.img} alt=${pet.type}>
                        <p>${pet.name}</p>
                        <button class="button__hover">${BUTTON_INFO}</button>
                    </div>
                `
            }
          wrapper.innerHTML = out;
        })
        const petCardArr = document.querySelectorAll('.pets_slider_item');
        return petCardArr
}

export { showCard }

 