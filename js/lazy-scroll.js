document.addEventListener('DOMContentLoaded', () => {
    const allScrollElems = document.querySelectorAll('[href^="#"]');

    function addScroll(elems) {
        elems.forEach(item => {
            const href = item.href;
            const REGEXP = /#\w+/gi;

            if(REGEXP.test(href)) {
                const result = href.match(REGEXP);
                const toScroll = document.querySelector(result[0]);

                item.addEventListener('click', (event) => {
                    event.preventDefault();
                    toScroll.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                });
            }
            
        });
    }

    addScroll(allScrollElems);
});


