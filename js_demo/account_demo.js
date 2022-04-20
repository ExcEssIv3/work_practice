// forms

const firstName = document.forms['form']['firstName'];
const lastName = document.forms['form']['lastName'];
const email = document.forms['form']['email'];
const password = document.forms['form']['password'];
const passwordConfirm = document.forms['form']['passwordConfirm'];
const phone = document.forms['form']['phone'];
const date = document.forms['form']['date'];

// errors

// first name

const emptyFirst = document.getElementById('empty_first');
const nonAlphanumericFirst = document.getElementById('non_alphanumeric_first');

// last name

const emptyLast = document.getElementById('empty_last');
const nonAlphanumericLast = document.getElementById('non_alphanumeric_last');

// email

const emptyEmail = document.getElementById('empty_email');
const invalidEmail = document.getElementById('invalid_email');

// password

const emptyPassword = document.getElementById('empty_password');
const passwordLength = document.getElementById('password_length');
const passwordNum = document.getElementById('password_num');
const passwordUpper = document.getElementById('password_upper');
const passwordLower = document.getElementById('password_lower');

// password confirm

const emptyPasswordConfirm = document.getElementById('empty_password_confirm');
const confirmationPasswordMatch = document.getElementById('confirmation_password_match');

// phone

const empty_phone = document.getElementById('empty_phone');
const phoneNum = document.getElementById('phone_num');
const phoneLength = document.getElementById('phone_length');

firstName.addEventListener('change', (e) => {
    if (firstName.value === '' || firstName.value == null) {
        emptyFirst.style.display = 'block';
    } else if (!firstName.value.match(/^[a-zA-Z]+$/)) {
        nonAlphanumericFirst.style.display = 'block';
    }
})