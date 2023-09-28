// import { showCard } from './card_pets.js';

// async function init() {
//     await showCard();
// }

// init().then(() => {
//     createSlider()
// })

function createSlider() {

    const sliderWrapper = document.querySelector('.pets_slider_wrapper'), 
          sliderInner = document.querySelector('.pets_slider_items'), 
          slides = document.querySelectorAll('.pets_slider_item'), 
          buttonNext = document.querySelector('.arrow_end'),
          buttonPrev = document.querySelector('.arrow__start'),
          media740 = window.matchMedia('(max-width: 740px)'),
          media1050 = window.matchMedia('(min-width: 741px) and (max-width: 1050px)'),
          width = window.getComputedStyle(sliderWrapper).width;

          console.log(slides.length / 2)
          console.log(slides.length)
          console.log(slides.length % 3)
          console.log(width)

    let offset = 0;

        buttonNext.addEventListener('click', () => {
            if(offset == +width.slice(0, width.length - 2) * (slides.length % 3)) {
                offset = 0;
            } else {
                offset += +width.slice(0, width.length - 2); 
            }
            sliderInner.style.transform = `translateX(-${offset}px)`
        })
        
        buttonPrev.addEventListener('click', () => {
            if(offset == 0) {
                offset = +width.slice(0, width.length -2) * ( slides.length % 3 );
            } else {
                offset -= +width.slice(0, width.length -2);
            }
            sliderInner.style.transform = `translateX(-${offset}px)`
        })

        if(media740.matches) {
            buttonNext.addEventListener('click', () => {
                console.log('media740')
                if(offset == +width.slice(0, width.length - 2) * slides.length) {
                    offset = 0;
                } else {
                    offset += +width.slice(0, width.length - 2);
                }
                sliderInner.style.transform = `translateX(-${offset}px)`
            })

            buttonPrev.addEventListener('click', () => {
                console.log('media740')
                if(offset == 0) {
                    offset =  +width.slice(0, width.length - 2) * slides.length;
                } else {
                    offset -= +width.slice(0, width.length -2);
                }
                sliderInner.style.transform = `translateX(-${offset}px)`
            })
        }

        if(media1050.matches) {
            buttonNext.addEventListener('click', () => {
                console.log('media1050')
                if(offset == +width.slice(0, width.length - 2) * (slides.length / 2)) {
                    offset = 0;
                } else {
                    offset += +width.slice(0, width.length - 2);
                }
                sliderInner.style.transform = `translateX(-${offset}px)`
            })

            buttonPrev.addEventListener('click', () => {
                console.log('media1050')
                if(offset == 0) {
                    offset =  +width.slice(0, width.length - 2) * (slides.length % 2);
                } else {
                    offset -= +width.slice(0, width.length -2);
                }
                sliderInner.style.transform = `translateX(-${offset}px)`
            })
        }
    }

    window.addEventListener('change', () => {
        createSlider;
    });

export { createSlider }