const BUTTON_INFO = 'Learn more'

function showCard() {
    //не приходят картинки при запросе через URL
    // fetch("https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/shelter/pets.json")
    fetch('pets.json')
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
}

export { showCard }

 // const petsArr = []

    // class PetsCard {
    // constructor(src, alt, name, parentSelector) {
    //     this.src = src;
    //     this.alt = alt;
    //     this.name = name;
    //     this.parent = document.querySelector(parentSelector);
    // }

    // render() {
    //     const element = document.createElement('div');
    //     element.setAttribute('class', 'pets_slider_item');
    //     element.classList.add('our_pets_slider_item')
    //     element.innerHTML = `
    //     <img src=${this.src} alt=${this.alt}>
    //     <p>${this.name}</p>
    //     <button class="button__hover">Learn more</button>
    //     `;
    //     this.parent.append(element);
    // }
    // }

    // let petKatrine = new PetsCard(
    //     "./main_img/pets-katrine.png",
    //     "pets-katrine",
    //     'Katrine',
    //     '.pets_slider_items'
    //     )
    //     petKatrine.render();
    //     petsArr.push(petKatrine);
        
    
    //     let petJennifer = new PetsCard(
    //     "./main_img/pets-jennifer.png",
    //     "pets-jennifer",
    //     'Jennifer',
    //     '.pets_slider_items'
    //     )
    //     petJennifer.render();
    //     petsArr.push(petJennifer);
        
        
    //     let petWoody = new PetsCard(
    //     "./main_img/pets-woody.png",
    //     "pets-woody",
    //     'Woody',
    //     '.pets_slider_items'
    //     )
    //     petWoody.render();
    //     petsArr.push(petWoody);
        
    
    //     let petSophia = new PetsCard(
    //     "./our_pets_img/pets-sophia.png",
    //     "pets-sophia",
    //     'Sophia',
    //     '.pets_slider_items'
    //     )
    //     petSophia.render();
    //     petsArr.push(petSophia);
        
    
    //     let petTimmy = new PetsCard(
    //     "./our_pets_img/pets-timmy.png",
    //     "pets-timmy",
    //     'Timmy',
    //     '.pets_slider_items'
    //     )
    //     petTimmy.render();
    //     petsArr.push(petTimmy);
       
    //     let petCharly = new PetsCard(
    //     "./our_pets_img/pets-charly.png",
    //     "pets-charly",
    //     'Charly',
    //     '.pets_slider_items'
    //     )
    //     petCharly.render();
    //     petsArr.push(petCharly);
    
    //     let petScarlett = new PetsCard(
    //     "./our_pets_img/pets-scarlet.png",
    //     "pets-scarlet",
    //     'Scarlett',
    //     '.pets_slider_items'
    //     )
    //     petScarlett.render();
    //     petsArr.push(petScarlett);
    
    //     let petFreddie = new PetsCard(
    //     "./our_pets_img/pets-freddie.png",
    //     "pets-freddie",
    //     'Freddie',
    //     '.pets_slider_items'
    //     )
    //     petFreddie.render();
    //     petsArr.push(petFreddie);

    // export { petsArr }

   
