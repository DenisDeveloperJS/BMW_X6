document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const more = document.querySelectorAll('.more');
    more[0].addEventListener('click', openModal);
    more[1].addEventListener('click', openModal);
    overlay.addEventListener('click', closeModal);
    document.body.addEventListener('click', closeModal);

    function closeModal(event) {
        const target = event.target;
        if(target.closest('.overlay') || target.closest('.modal__close')) {
            modal.classList.add('hidden');
            document.documentElement.style.overflow = 'auto';
        }
    }
    function openModal(event) {
        event.preventDefault();
        modal.classList.remove('hidden');
        document.documentElement.style.overflow = 'hidden';
    }

});