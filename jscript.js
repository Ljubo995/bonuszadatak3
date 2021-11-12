const form = document.getElementById('form')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email');
    var image = document.querySelector('.email-error');
    var message = document.querySelector('.error-email');
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.value === '') {
        message.innerText = 'E-mail Adress cannot be empty';
        message.style.visibility = 'visible';
        image.style.visibility = 'visible';
        email.style.borderColor = 'hsl(0, 100%, 74%)';
    }
    else if (!regex.test(email.value)) {
        message.innerText = 'This is not an E-Mail';
        message.style.visibility = 'visible';
        image.style.visibility = 'visible';
        email.style.borderColor = 'hsl(0, 100%, 74%)';
    }
    else {
        message.innerText = 'email';
        message.style.visibility = 'hidden';
        image.style.visibility = 'hidden';
        email.style.borderColor = 'hsl(246, 25%, 77%)';
    }
    const FirstName = document.getElementById('Firstname');
    var image = document.querySelector('.firstname-error');
    var message = document.querySelector('.error-firstname');
    if (FirstName.value === '') {
        message.innerText = 'First Name cannot be empty';
        message.style.visibility = 'visible';
        image.style.visibility = 'visible';
        FirstName.style.borderColor = 'hsl(0, 100%, 74%)';
    }
    else {
        message.innerText = 'First Name';
        message.style.visibility = 'hidden';
        image.style.visibility = 'hidden';
        FirstName.style.borderColor = 'hsl(246, 25%, 77%)';
    }
    const LastName = document.getElementById('Lastname');
    var image = document.querySelector('.lastname-error');
    var message = document.querySelector('.error-lastname');
    if (LastName.value === '') {
        message.innerText = 'Last Name cannot be empty';
        message.style.visibility = 'visible';
        image.style.visibility = 'visible';
        LastName.style.borderColor = 'hsl(0, 100%, 74%)';
    }
    else {
        message.innerText = 'Last Name';
        message.style.visibility = 'hidden';
        image.style.visibility = 'hidden';
        LastName.style.borderColor = 'hsl(246, 25%, 77%)';
    }
    const PWrd = document.getElementById('password');
    var image = document.querySelector('.password-error');
    var message = document.querySelector('.error-password');
    if (PWrd.value === '') {
        message.innerText = 'Please enter Your Password';
        message.style.visibility = 'visible';
        image.style.visibility = 'visible';
        PWrd.style.borderColor = 'hsl(0, 100%, 74%)';
    }
    else {
        message.innerText = 'Password';
        message.style.visibility = 'hidden';
        image.style.visibility = 'hidden';
        PWrd.style.borderColor = 'hsl(246, 25%, 77%)';
    }
});