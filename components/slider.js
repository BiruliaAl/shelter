
function createSlider() {
    window.addEventListener('DOMContentLoaded', () => {
        const sliderWrapper = document.querySelector('.pets_slider_wrapper'),
                sliderInner = document.querySelector('.pets_slider_items'),
                slides = document.querySelectorAll('.pets_slider_item'),
                buttonNext = document.querySelector('.arrow_end'),
                buttonPrev = document.querySelector('.arrow__start'),
                width = window.getComputedStyle(sliderWrapper).width;
    
        sliderInner.style.width = 100 *  slides.length + '%';
        slides.forEach( slide => {
            slide.style.width = width;
        })
    
        let offset = 0;
    
        buttonNext.addEventListener('click', () => {
            if(offset == +width.slice(0, width.length -2) * ( slides.length -1)) {
                let offset = 0;
            } else {
                offset += +width.slice(0, width.length -2);
            }
            sliderInner.style.transform = `translateX(-${offset}px)`
        })
    
        buttonPrev.addEventListener('click', () => {
            if(offset = 0) {
                offset = +width.slice(0, width.length -2) * ( slides.length -1)
            } else {
                offset -= +width.slice(0, width.length -2);
            }
            sliderInner.style.transform = `translateX(-${offset}px)`
        })
    })
}

export { createSlider }