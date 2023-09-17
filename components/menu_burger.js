export default function showMenu() {
    let divShadow = document.querySelector('.shadow'),
    menuWrapper = document.querySelector('.nav_items'),
    menuLink = document.querySelectorAll('.nav_link'),
    burgerButton = document.querySelector('.burger_img');

    const media = window.matchMedia('(max-width: 767.9px)');

    function clouseBurger() {
        menuWrapper.classList.toggle('menu_activ');
        
        if(menuWrapper.classList.contains('menu_activ')) {
            burgerButton.style.transform = "rotate(90deg)";
            
            if(media.matches) {
                document.body.style.overflow = "hidden";
                divShadow.hidden = false;
            }
        }

        if(!menuWrapper.classList.contains('menu_activ')) {
            burgerButton.style.transform = "rotate(360deg)";
            document.body.style.overflow = "";
            divShadow.hidden = true;
        }
    }
    
    burgerButton.addEventListener('click', clouseBurger)

    menuWrapper.addEventListener('click', function(event) {
        const target = event.target;
        menuLink.forEach(elem => {
            if(target == elem) {
                clouseBurger();
            }
        })
    })

    document.addEventListener("click", function (event) {
        const targetMenu = event.composedPath().includes(menuWrapper);
        const targetBtn = event.composedPath().includes(burgerButton);
        if(!targetMenu && !targetBtn && menuWrapper.classList.contains('menu_activ')) {
            clouseBurger();
        }
    });
}


