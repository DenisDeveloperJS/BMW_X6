document.addEventListener('DOMContentLoaded', () => {
    const featureLinks = document.querySelectorAll('.feature__link');
    const featureSubs = document.querySelectorAll('.feature-sub');
    featureLinks.forEach((link, index) => {
        link.addEventListener('click', event => {
            featureLinks.forEach((item, index) => {
                const target = event.target.closest('.feature__link');
                if(item !== target) {
                    item.classList.remove('feature__link_active');
                    featureSubs[index].classList.add('hidden');
                } else {
                    link.classList.toggle('feature__link_active');
                    featureSubs[index].classList.toggle('hidden');
                }
            });
        });
    });
});