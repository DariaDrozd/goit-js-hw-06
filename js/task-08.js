const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', formSumb);

function formSumb (event) {
    event.preventDefault();

    const formElem = event.currentTarget.elements;
    const email = formElem.email.value;
    const password = formElem.password.value;


    const formInfo = {
        email,
        password,
    };

    if (email === "" || password === "") {
        alert('Complet all form fields!');

    } else {
        console.log(formInfo);
    };

    loginForm.reset();
};
