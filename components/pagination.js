

    // const petsArr2 = petsArr.concat(petsArr, petsArr, petsArr, petsArr, petsArr);//массив 
    const mediaMax = window.matchMedia('(min-width: 769px)');
    const mediaMiddle =  window.matchMedia('(max-width: 768px)');
    const mediaLittle =  window.matchMedia('(max-width: 550px)');
    const paginationNav = document.querySelectorAll('.our_pets_nav_item');
    const paginatWrapper = document.querySelectorAll('.our_pets_slider__wrap');//доступ к кнопкам навигации