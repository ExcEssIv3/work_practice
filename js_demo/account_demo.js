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

// email regex
let validEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// show errors on change

// first name
firstName.addEventListener('change', (e) => {
    if (firstName.value === '' || firstName.value == null) {
        emptyFirst.style.display = 'block';
        // firstName.classList.add('box-error');
        nonAlphanumericFirst.style.display = 'none';
    } else {
        emptyFirst.style.display = 'none';
        if (!firstName.value.match(/^[a-zA-Z]*$/)) {
            nonAlphanumericFirst.style.display = 'block';
            // firstName.classList.add('box-error');
        } else {
            nonAlphanumericFirst.style.display = 'none';
        }
    }
});

// last name
lastName.addEventListener('change', (e) => {
    if (lastName.value === '' || lastName.value == null) {
        emptyLast.style.display = 'block';
        // lastName.classList.add('box-error');
        nonAlphanumericLast.style.display = 'none';
    } else {
        emptyLast.style.display = 'none';
        if (!lastName.value.match(/^[a-zA-Z]*$/)) {
            nonAlphanumericLast.style.display = 'block';
            // lastName.classList.add('box-error');
        } else {
            nonAlphanumericLast.style.display = 'none';
        }
    }
});

email.addEventListener('change', (e) => {
    if (email.value === '' || email.value == null) {
        emptyEmail.style.display = 'block';
        // email.classList.add('box-error');
        invalidEmail.style.display = 'none';
    } else {
        emptyEmail.style.display = 'none';
        if (!email.value.match(validEmail)) {
            invalidEmail.style.display = 'block';
            // email.classList.add('box-error');
        } else {
            invalidEmail.style.display = 'none';
        }
    }
})

// password
password.addEventListener('change', (e) => {
    if (password.value === '' || password.value == null) {
        emptyPassword.style.display = 'block';
        // password.classList.add('box-error');
        passwordLength.style.display = 'none';
        passwordNum.style.display = 'none';
        passwordUpper.style.display = 'none';
        passwordLower.style.display = 'none';
    } else {
        emptyPassword.style.display = 'none';
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
    }
});

// password confirm
passwordConfirm.addEventListener('change', (e) => {
    if (passwordConfirm.value === '' || passwordConfirm.value == null) {
        emptyPasswordConfirm.style.display = 'block';
        // passwordConfirm.classList.add('box-error');
        confirmationPasswordMatch.style.display = 'none';
    } else {
        emptyPasswordConfirm.style.display = 'none';
        if (passwordConfirm.value !== password.value) {
            confirmationPasswordMatch.style.display = 'block';
            // passwordConfirm.classList.add('box-error');
        } else {
            confirmationPasswordMatch.style.display = 'none';
        }
    }
});

// phone
phone.addEventListener('change', (e) => {
    if (phone.value === '' || phone.value == null) {
        emptyPhone.style.display = 'block';
        // phone.classList.add('box-error');
        phoneLength.style.display = 'none';
        phoneNum.style.display = 'none';
    } else {
        emptyPhone.style.display = 'none';
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
    }
});

form.addEventListener('submit', (e) => {

    // first name

    if (formFirstName.value === '' || formFirstName.value == null) {
        emptyFirst.style.display = 'block';
        nonAlphanumericFirst.style.display = 'none';
        e.preventDefault();
    } else {
        emptyFirst.style.display = 'none';
        if (!formFirstName.value.match(/^[a-zA-Z]*$/)) {
            nonAlphanumericFirst.style.display = 'block';
            e.preventDefault();
        } else {
            nonAlphanumericFirst.style.display = 'none';
            e.preventDefault();
        }
    }

    // last name

    if (formLastName.value === '' || formLastName.value == null) {
        emptyLast.style.display = 'block';
        nonAlphanumericLast.style.display = 'none';
        e.preventDefault();
    } else {
        emptyLast.style.display = 'none';
        e.preventDefault();
        if (!formLastName.value.match(/^[a-zA-Z]*$/)) {
            nonAlphanumericLast.style.display = 'block';
            e.preventDefault();
        } else {
            nonAlphanumericLast.style.display = 'none';
            e.preventDefault();
        }
    }

    // email

    if (formEmail.value === '' || formEmail.value == null) {
        emptyEmail.style.display = 'block';
        invalidEmail.style.display = 'none';
        e.preventDefault();
    } else {
        emptyEmail.style.display = 'none';
        e.preventDefault();
        if (!formEmail.value.match(validEmail)) {
            invalidEmail.style.display = 'block';
            e.preventDefault();
        } else {
            invalidEmail.style.display = 'none';
            e.preventDefault();
        }
    }

    // password

    if (formPassword.value === '' || formPassword.value == null) {
        emptyPassword.style.display = 'block';
        passwordLength.style.display = 'none';
        passwordNum.style.display = 'none';
        passwordUpper.style.display = 'none';
        passwordLower.style.display = 'none';
        e.preventDefault();
    } else {
        emptyPassword.style.display = 'none';
        e.preventDefault();
        if (formPassword.value.length < 8) {
            passwordLength.style.display = 'block';
            e.preventDefault();
        } else {
            passwordLength.style.display = 'none';
            e.preventDefault();
        }
        if (!formPassword.value.match(/[0-9]/)) {
            passwordNum.style.display = 'block';
            e.preventDefault();
        } else {
            passwordNum.style.display = 'none';
            e.preventDefault();
        }
        if (!formPassword.value.match(/[A-Z]/)) {
            passwordUpper.style.display = 'block';
            e.preventDefault();
        } else {
            passwordUpper.style.display = 'none';
            e.preventDefault();
        }
        if (!formPassword.value.match(/[a-z]/)) {
            passwordLower.style.display = 'block';
            e.preventDefault();
        } else {
            passwordLower.style.display = 'none';
            e.preventDefault();
        }
    }

    // password confirmation

    if (formPasswordConfirm.value === '' || passwordConfirm.value == null) {
        emptyPasswordConfirm.style.display = 'block';
        confirmationPasswordMatch.style.display = 'none';
        e.preventDefault();
    } else {
        emptyPasswordConfirm.style.display = 'none';
        e.preventDefault();
        if (formPasswordConfirm.value !== password.value) {
            confirmationPasswordMatch.style.display = 'block';
            e.preventDefault();
        } else {
            confirmationPasswordMatch.style.display = 'none';
            e.preventDefault();
        }
    }

    // phone

    if (formPhone.value === '' || formPhone.value == null) {
        emptyPhone.style.display = 'block';
        phoneLength.style.display = 'none';
        phoneNum.style.display = 'none';
        e.preventDefault();
    } else {
        emptyPhone.style.display = 'none';
        e.preventDefault();
        if (formPhone.value.length > 12 || formPhone.value.length < 10) {
            phoneLength.style.display = 'block';
            e.preventDefault();
        } else {
            phoneLength.style.display = 'none';
            e.preventDefault();
        }
        if (formPhone.value.match(/[a-zA-Z]/)) {
            phoneNum.style.display = 'block';
            e.preventDefault();
        } else {
            phoneNum.style.display = 'none';
            e.preventDefault();
        }
    }
});