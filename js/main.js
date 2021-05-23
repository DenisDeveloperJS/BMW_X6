document.addEventListener('DOMContentLoaded', () => {
    const designList = document.querySelectorAll('.design-list__item');
    const designImages = document.querySelectorAll('.design-images');
    const designDescr = document.querySelectorAll('.design__descr');
    const designTitle = document.querySelectorAll('.design__title');
    
    designList[0].addEventListener('click', showInterior);
    designList[1].addEventListener('click', showBody);

    function showBody() {
        toggleBody(designImages, designDescr, designTitle);

        designList[0].classList.remove('design-list__item_active');
        designList[1].classList.add('design-list__item_active');
    }
    function showInterior() {
        toggleInterior(designImages, designDescr, designTitle);

        designList[0].classList.add('design-list__item_active');
        designList[1].classList.remove('design-list__item_active');
    }
    function toggleInterior(...elem) {
        elem.forEach(item => {
            item[0].classList.remove('hidden');
            item[1].classList.add('hidden');
        });
    }
    function toggleBody(...elem) {
        elem.forEach(item => {
            item[0].classList.add('hidden');
            item[1].classList.remove('hidden');
        });
    }
});