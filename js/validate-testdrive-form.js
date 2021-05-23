document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-test-drive');
    const formButton = document.querySelector('.form__button');
    const name = form.name;
    const mail = form.mail;
    const phone = form.phone;
    const data = {name: '', mail: '', phone: ''}
    let i = 0;

    if(localStorage.getItem('test-drive-data1')) {
        formButton.textContent = 'Отправить ещё';
        formButton.classList.add('form__button_active');
    }
    if(localStorage.getItem('test-drive-data3')) {

        formButton.textContent = 'Отправлено максимальное кол. заявок';
        formButton.classList.remove('form__button_active');
        formButton.setAttribute("disabled", "disabled");

        formButton.removeEventListener("click", formButton);

        mail.value = '';
        phone.value = '';
        name.value = '';
    }
    
    formButton.addEventListener('click', hendlerButton);

    function hendlerButton(event) {
        event.preventDefault();
        let i2 = 5;

        if(localStorage.getItem('test-drive-data3')) {
            formButton.textContent = 'Отправлено максимальное кол. заявок';
            formButton.classList.remove('form__button_active');
            formButton.setAttribute("disabled", "disabled");

            formButton.removeEventListener("click", formButton);

            mail.value = '';
            phone.value = '';
            name.value = '';

            return true;
        }

        if(validateEmail(mail.value.trim())) {
            data.mail = mail.value;
        } else {
            mail.classList.add('form__input_danger');
        }

        if(phone.value.trim()) {
            data.phone = phone.value;
        } else {
            phone.classList.add('form__input_danger');
        }

        if(name.value.trim()) {
            data.name = name.value;
        } else {
            name.classList.add('form__input_danger');
        }

        if(name.value.trim() && validateEmail(mail.value.trim()) && phone.value.trim() && !localStorage.getItem('test-drive-data3')) {
            this.textContent = `Заявка отправлена (${i2})`;
            formButton.setAttribute("disabled", "disabled");

            mail.value = '';
            phone.value = '';
            name.value = '';

            i++;
            localStorage.setItem('test-drive-data'+i, JSON.stringify(data));
            sendData(data);
           

            this.classList.remove('form__button_active');

            const interval = setInterval(() => {
                i2--;
                this.textContent = `Заявка отправлена (${i2})`;
            }, 980);

            setTimeout(() => {
                formButton.removeAttribute("disabled");
                this.classList.add('form__button_active');

                if(localStorage.getItem('test-drive-data1')) {
                    this.textContent = 'Отправить ещё';
                }
                if(localStorage.getItem('test-drive-data3')) {
                    formButton.textContent = 'Отправлено максимальное кол. заявок';
                    formButton.classList.remove('form__button_active');
                    formButton.setAttribute("disabled", "disabled");
        
                    formButton.removeEventListener("click", formButton);
        
                    mail.value = '';
                    phone.value = '';
                    name.value = '';
                }
                clearInterval(interval);
            }, 5000);

            name.classList.remove('form__input_danger');
            mail.classList.remove('form__input_danger');
            phone.classList.remove('form__input_danger');
        }
    }

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
});

function validateEmail(email) {
    const pattern  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email.toLowerCase());
}






