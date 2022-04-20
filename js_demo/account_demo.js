// text boxes

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let passwordConfirm = document.getElementById('passwordConfirm');
let phone = document.getElementById('phone');
let date = document.getElementById('date');

// forms

let formFirstName = document.forms['form']['firstName'];
let formLastName = document.forms['form']['lastName'];
let formEmail = document.forms['form']['email'];
let formPassword = document.forms['form']['password'];
let formPasswordConfirm = document.forms['form']['passwordConfirm'];
let formPhone = document.forms['form']['phone'];
let formDate = document.forms['form']['date'];

// errors

// first name

let emptyFirst = document.getElementById('empty_first');
let nonAlphanumericFirst = document.getElementById('non_alphanumeric_first');

// last name

let emptyLast = document.getElementById('empty_last');
let nonAlphanumericLast = document.getElementById('non_alphanumeric_last');

// email

let emptyEmail = document.getElementById('empty_email');
let invalidEmail = document.getElementById('invalid_email');

// password

let emptyPassword = document.getElementById('empty_password');
let passwordLength = document.getElementById('password_length');
let passwordNum = document.getElementById('password_num');
let passwordUpper = document.getElementById('password_upper');
let passwordLower = document.getElementById('password_lower');

// password confirm

let emptyPasswordConfirm = document.getElementById('empty_password_confirm');
let confirmationPasswordMatch = document.getElementById('confirmation_password_match');

// phone

let emptyPhone = document.getElementById('empty_phone');
let phoneNum = document.getElementById('phone_num');
let phoneLength = document.getElementById('phone_length');

// show errors on change

// first name
firstName.addEventListener('change', (e) => {
    if (firstName.value === '' || firstName.value == null) {
        emptyFirst.style.display = 'block';
        // firstName.classList.add('box-error');
    } else {
        emptyFirst.style.display = 'none';
    }
    if (!firstName.value.match(/^[a-zA-Z]*$/)) {
        nonAlphanumericFirst.style.display = 'block';
        // firstName.classList.add('box-error');
    } else {
        nonAlphanumericFirst.style.display = 'none';
    }
});

// last name
lastName.addEventListener('change', (e) => {
    if (lastName.value === '' || lastName.value == null) {
        emptyLast.style.display = 'block';
        // lastName.classList.add('box-error');
    } else {
        emptyLast.style.display = 'none';
    }
    if (!lastName.value.match(/^[a-zA-Z]*$/)) {
        nonAlphanumericLast.style.display = 'block';
        // lastName.classList.add('box-error');
    } else {
        nonAlphanumericLast.style.display = 'none';
    }
});

email.addEventListener('change', (e) => {
    let validEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value === '' || email.value == null) {
        emptyEmail.style.display = 'block';
        // email.classList.add('box-error');
    } else {
        emptyEmail.style.display = 'none';
    }
    if (!email.value.match(validEmail) && email.value !== '' && email.value != null) {
        invalidEmail.style.display = 'block';
        // email.classList.add('box-error');
    } else {
        invalidEmail.style.display = 'none';
    }
})

// password
password.addEventListener('change', (e) => {
    if (password.value === '' || password.value == null) {
        emptyPassword.style.display = 'block';
        // password.classList.add('box-error');
    } else {
        emptyPassword.style.display = 'none';
    }
    if (password.value.length < 8) {
        passwordLength.style.display = 'block';
        // password.classList.add('box-error');
    } else {
        passwordLength.style.display = 'none';
    }
    if (!password.value.match(/[0-9]/)) {
        passwordNum.style.display = 'block';
        // password.classList.add('box-error');
    } else {
        passwordNum.style.display = 'none';
    }
    if (!password.value.match(/[A-Z]/)) {
        passwordUpper.style.display = 'block';
        // password.classList.add('box-error');
    } else {
        passwordUpper.style.display = 'none';
    }
    if (!password.value.match(/[a-z]/)) {
        passwordLower.style.display = 'block';
        // password.classList.add('box-error');
    } else {
        passwordLower.style.display = 'none';
    }
});

// password confirm
passwordConfirm.addEventListener('change', (e) => {
    if (passwordConfirm.value === '' || passwordConfirm.value == null) {
        emptyPasswordConfirm.style.display = 'block';
        // passwordConfirm.classList.add('box-error');
    } else {
        emptyPasswordConfirm.style.display = 'none';
    }
    if (passwordConfirm.value !== password.value) {
        confirmationPasswordMatch.style.display = 'block';
        // passwordConfirm.classList.add('box-error');
    } else {
        confirmationPasswordMatch.style.display = 'none';
    }
});

// phone
phone.addEventListener('change', (e) => {
    if (phone.value === '' || phone.value == null) {
        emptyPhone.style.display = 'block';
        // phone.classList.add('box-error');
    } else {
        emptyPhone.style.display = 'none';
    }
    if (phone.value.length > 12 || phone.value.length < 10) {
        phoneLength.style.display = 'block';
        // phone.classList.add('box-error');
    } else {
        phoneLength.style.display = 'none';
    }
    if (phone.value.match(/[a-zA-Z]/)) {
        phoneNum.style.display = 'block';
        // phone.classList.add('box-error');
    } else {
        phoneNum.style.display = 'none';
    }
});

form.addEventListener('submit', (e) => {
    if (firstName.value === '' || firstName.value == null) {
        emptyFirst.style.display = 'block';
        // e.preventDefault();
    } else if (!firstName.value.match(/^[a-zA-Z]+$/)) {
        nonAlphanumericFirst.style.display = 'block';
        // e.preventDefault();
    }
});