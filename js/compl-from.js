document.addEventListener('DOMContentLoaded', () => {
    const modalButton = document.querySelector('.modal__button');
    const form = document.querySelector('.modal__form');

    modalButton.addEventListener('click', (e) => {
        e.preventDefault();
        const name = form[0];
        const mail = form[1];
        const data = {
            name: '',
            mail: '',
        }
        if(name.value.trim() && validateEmail(mail.value.trim()) ) {
            data.name = name.value;
            data.mail = mail.value;

            sendData(data);

            modalButton.classList.add('form__button_active');
            form[0].value = '';
            form[1].value = '';
            modalButton.textContent = 'Отправлено!';

            name.classList.remove('form__input_danger');
            mail.classList.remove('form__input_danger');
            modalButton.setAttribute("disabled", "disabled");
        } else {
            if(!name.value.trim()) {
                name.classList.add('form__input_danger');
            }
            if(!validateEmail(mail.value.trim())) {
                mail.classList.add('form__input_danger');
            }
        }
    });
});

async function sendData(data) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
    });
    console.log(await response.json());
}

function validateEmail(email) {
    const pattern  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email.toLowerCase());
}