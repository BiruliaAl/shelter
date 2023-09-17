
function renderModalWindow() {
    //не приходят картинки при запросе через URL
    // 
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

    // class PetsModal {
    //     constructor(src, alt, name, type, breed, description, age, inoculations, diseases, parasites, parentSelector) {
    //         this.src = src;
    //         this.alt = alt;
    //         this.name = name;
    //         this.type = type;
    //         this.breed = breed;
    //         this.description = description;
    //         this.age = age;
    //         this.inoculations = inoculations;
    //         this.diseases = diseases;
    //         this.parasites = parasites;
    //         this.parent = document.querySelector(parentSelector);
    //     }
    
    //     render() {
    //         const element = document.createElement('div');
    //         element.setAttribute('class', 'pets_modal_item');
    //         element.innerHTML = `
    //             <div class="modal_cross">
    //                 <img src="./main_img/Vector.png" alt="cross">
    //             </div>
    //             <div class="pets_modal_img"><img src=${this.src} alt=${this.alt}></div>
    //             <div>
    //                 <h3>${this.name}</h3>
    //                 <div>${this.type} - ${this.breed}</div>
    //                 <p>${this.description}</p>
    //                 <ul>
    //                     <li><span>Age:</span> ${this.age}</li>
    //                     <li><span>Inoculations:</span>${this.inoculations} </li>
    //                     <li><span>Diseases:</span>${this.diseases }</li>
    //                     <li><span>Parasites:</span>${this.parasites}</li>
    //                 </ul>
    //             </div>
    //             `;
    //         this.parent.append(element);
    //     }
    //     }
    
    //     let modalWoody = new PetsModal(
    //         "./img/our_pets/pets-woody.png",
    //         "pets-woody",
    //         'Woody',
    //         "Dog",
    //         "Golden Retriever",
    //         "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    //         "3 years 6 months",
    //         "adenovirus", "distemper",
    //         "right back leg mobility reduced",
    //         "none",
    //         ".pets_modal_items"
    //     )
    //     modalWoody.render()
    //     petsModal.push(modalWoody)
    
    //     let modalKaterine = new PetsModal(
    //         "./img/our_pets/pets-katrine.png",
    //         "pets-katrine",
    //         'Katrine',
    //         "Cat",
    //         "British Shorthair",
    //         "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    //         "6 months",
    //         "panleukopenia",
    //         "none",
    //         "none",
    //         ".pets_modal_items"
    //     )
    //     modalKaterine.render()
    //     petsModal.push(modalKaterine)
    
    //     let modalJennifer = new PetsModal(
    //         "./img/our_pets/pets-jennifer.png",
    //         "pets-jennifer",
    //         'Jennifer',
    //         "Dog",
    //         "Labrador",
    //         "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    //         "2 months",
    //         "none",
    //         "none",
    //         "none",
    //         ".pets_modal_items"
    //     )
    //     modalJennifer.render()
    //     petsModal.push(modalJennifer)
    
    //     let modalSophia = new PetsModal(
    //         "./img/our_pets_img/pets-sophia.png",
    //         "pets-sophia",
    //         'Sophia',
    //         "Dog",
    //         "Shih tzu",
    //         "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    //         "1 month",
    //         "parvovirus",
    //         "none",
    //         "none",
    //         ".pets_modal_items"
    //     )
    //     modalSophia.render()
    //     petsModal.push(modalSophia)
    
    //     let modalTimmy = new PetsModal(
    //         "./img/our_pets_img/pets-timmy.png",
    //         "pets-timmy",
    //         'Timmy',
    //         "Cat",
    //         "British Shorthair",
    //         "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    //         "2 years 3 months",
    //         "calicivirus", "viral rhinotracheitis",
    //         "kidney stones",
    //         "none",
    //         ".pets_modal_items"
    //     )
    //     modalTimmy.render()
    //     petsModal.push(modalTimmy)
    
    //     let modalCharly = new PetsModal(
    //         "./img/our_pets_img/pets-charly.png",
    //         "pets-charly",
    //         'Charly',
    //         "Dog",
    //         "Jack Russell Terrier",
    //         "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    //         "8 years",
    //         "bordetella bronchiseptica", "leptospirosis",
    //         "deafness", "blindness",
    //         "lice", "fleas",
    //         ".pets_modal_items"
    //     )
    //     modalCharly.render()
    //     petsModal.push(modalCharly)
    
    //     let modalScarlett = new PetsModal(
    //         "./img/our_pets_img/pets-scarlet.png",
    //         "pets-scarlet",
    //         'Scarlett',
    //         "Dog",
    //         "Jack Russell Terrier",
    //         "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    //         "3 months",
    //         "parainfluenza",
    //         "none",
    //         "none",
    //         ".pets_modal_items"
    //     )
    //     modalScarlett.render()
    //     petsModal.push(modalScarlett)

    //     let modalFreddie = new PetsModal(
    //         "./img/our_pets_img/pets-freddie.png",
    //         "pets-freddie",
    //         'Freddie',
    //         "Cat",
    //         "British Shorthair",
    //         "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    //         "2 months",
    //         "rabies",
    //         "none",
    //         "none",
    //         ".pets_modal_items"
    //     )
    //     modalFreddie.render()
    //     petsModal.push(modalFreddie)

        // const modalOpen = document.querySelectorAll('.pets_slider_item');
        // console.log(modalOpen)
      
        // modalOpen[0].addEventListener('click', function() {
            
        //         modalKaterine.render();

        //     const  modalClose = document.querySelector('.modal_cross'),
        //            modalItem = document.querySelector('.pets_modal_items'),
        //            shadowItem = document.querySelector('.shadow');
    
        //     shadowItem.hidden = false;
        //     document.body.style.overflow = "hidden";
            
        //     modalClose.addEventListener('click', () => {
        //         modalItem.innerHTML = "";
        //         document.body.style.overflow = "";
        //         shadowItem.hidden = true;
        //     })
    
        //     shadowItem.addEventListener('click', () => {
        //         modalItem.innerHTML = "";
        //         document.body.style.overflow = "";
        //         shadowItem.hidden = true;
        //     })        
        // })
    
        // modalOpen[1].addEventListener('click', function() {
            
        //     modalJennifer.render();
        //     console.log(modalJennifer)

        //     const  modalClose = document.querySelector('.modal_cross'),
        //             modalItem = document.querySelector('.pets_modal_items'),
        //             shadowItem = document.querySelector('.shadow');
    
        //     shadowItem.hidden = false;
        //     document.body.style.overflow = "hidden";
            
        //     modalClose.addEventListener('click', () => {
        //         modalItem.innerHTML = "";
        //         document.body.style.overflow = "";
        //         shadowItem.hidden = true;
        //     })
    
        //     shadowItem.addEventListener('click', () => {
        //         modalItem.innerHTML = "";
        //         document.body.style.overflow = "";
        //         shadowItem.hidden = true;
        //     })
    
        // })
    
        // modalOpen[2].addEventListener('click', function() {
            
        //     modalWoody.render();
        //     console.log(modalWoody)

        //     const  modalClose = document.querySelector('.modal_cross'),
        //             modalItem = document.querySelector('.pets_modal_items'),
        //             shadowItem = document.querySelector('.shadow');
    
        //     shadowItem.hidden = false;
        //     document.body.style.overflow = "hidden";
            
        //     modalClose.addEventListener('click', () => {
        //         modalItem.innerHTML = "";
        //         document.body.style.overflow = "";
        //         shadowItem.hidden = true;
        //     })
    
        //     shadowItem.addEventListener('click', () => {
        //         modalItem.innerHTML = "";
        //         document.body.style.overflow = "";
        //         shadowItem.hidden = true;
        //     })
        // })
    
        // modalOpen[3].addEventListener('click', function() {
            
        //     modalSophia.render();
        //     console.log(modalSophia)

        //     const  modalClose = document.querySelector('.modal_cross'),
        //             modalItem = document.querySelector('.pets_modal_items'),
        //             shadowItem = document.querySelector('.shadow');
    
        //     shadowItem.hidden = false;
        //     document.body.style.overflow = "hidden";
            
        //     modalClose.addEventListener('click', () => {
        //         modalItem.innerHTML = "";
        //         document.body.style.overflow = "";
        //         shadowItem.hidden = true;
        //     })
    
        //     shadowItem.addEventListener('click', () => {
        //         modalItem.innerHTML = "";
        //         document.body.style.overflow = "";
        //         shadowItem.hidden = true;
        //     })
        // })
    
        // modalOpen[4].addEventListener('click', function() {
            
        //     modalTimmy.render();
        //     console.log(modalTimmy)

        //     const  modalClose = document.querySelector('.modal_cross'),
        //     modalItem = document.querySelector('.pets_modal_items'),
        //     shadowItem = document.querySelector('.shadow');
    
        //     shadowItem.hidden = false;
        //     document.body.style.overflow = "hidden";
            
        //     modalClose.addEventListener('click', () => {
        //         modalItem.innerHTML = "";
        //         document.body.style.overflow = "";
        //         shadowItem.hidden = true;
        //     })
    
        //     shadowItem.addEventListener('click', () => {
        //         modalItem.innerHTML = "";
        //         document.body.style.overflow = "";
        //         shadowItem.hidden = true;
        //     })
        // })
    
        // modalOpen[5].addEventListener('click', function() {
            
        //     modalCharly.render();
        //     console.log(modalCharly)

        //     const  modalClose = document.querySelector('.modal_cross'),
        //     modalItem = document.querySelector('.pets_modal_items'),
        //     shadowItem = document.querySelector('.shadow');
    
        //     shadowItem.hidden = false;
        //     document.body.style.overflow = "hidden";

        //     modalClose.addEventListener('click', () => {
        //         modalItem.innerHTML = "";
        //         document.body.style.overflow = "";
        //         shadowItem.hidden = true;
        //     })
    
        //     shadowItem.addEventListener('click', () => {
        //         modalItem.innerHTML = "";
        //         document.body.style.overflow = "";
        //         shadowItem.hidden = true;
        //     })
        // })
    
        // modalOpen[6].addEventListener('click', function() {
            
        //     modalScarlett.render();
        //     console.log(modalScarlett)

        //     const  modalClose = document.querySelector('.modal_cross'),
        //         modalItem = document.querySelector('.pets_modal_items'),
        //         shadowItem = document.querySelector('.shadow');
    
        //     shadowItem.hidden = false;
        //     document.body.style.overflow = "hidden";
            
        //     modalClose.addEventListener('click', () => {
        //         modalItem.innerHTML = "";
        //         document.body.style.overflow = "";
        //         shadowItem.hidden = true;
        //     })
    
        //     shadowItem.addEventListener('click', () => {
        //         modalItem.innerHTML = "";
        //         document.body.style.overflow = "";
        //         shadowItem.hidden = true;
        //     })
        // })
    
        // modalOpen[7].addEventListener('click', function() {
            
        //     modalFreddie.render();
        //     console.log(modalFreddie)

        //     const  modalClose = document.querySelector('.modal_cross'),
        //     modalItem = document.querySelector('.pets_modal_items'),
        //     shadowItem = document.querySelector('.shadow');
    
        //     shadowItem.hidden = false;
        //     document.body.style.overflow = "hidden";
            
        //     modalClose.addEventListener('click', () => {
        //         modalItem.innerHTML = "";
        //         document.body.style.overflow = "";
        //         shadowItem.hidden = true;
        //     })
    
        //     shadowItem.addEventListener('click', () => {
        //         modalItem.innerHTML = "";
        //         document.body.style.overflow = "";
        //         shadowItem.hidden = true;
        //     })
        // })
