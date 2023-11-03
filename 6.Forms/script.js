const firstField = document.getElementById('firstname');
const displaySpan = document.getElementById('display-firstname');

firstField.addEventListener('keyup', function () {
    displaySpan.textContent = firstField.value;
});


// Add a keyup listener on the second input (the number input), so that if the age is 
// below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.

// TO DO
// Select the second input

const secondField = document.getElementById('age');

// Select the msg that should be displayed

const displayMsg = document.getElementById('a-hard-truth');

// Display the message

// secondField.addEventListener('keyup', function () {
//     displayMsg.style.visibility = 'visible';
// })


// Add a condition for when the msg should be displayed
secondField.addEventListener('keyup', function () {
const age = document.getElementById('age');
const inputAge = age.value;
console.log(inputAge);
if (inputAge > 18) {
    displayMsg.style.visibility = 'visible';
}
});

// Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if 
// the password is too short (less than 6 characters) or if the password and its confirmation do not match.

const password = document.getElementById('pwd');
const passwordConfirm = document.getElementById('pwd-confirm');

password.addEventListener('keyup', function () {
    const passwordLength = password.value.length;
    console.log(passwordLength)
    if (passwordLength < 6){
        password.style.backgroundColor = 'red';
    }
    else {
        password.style.backgroundColor = 'white';
    }
});
passwordConfirm.addEventListener('keyup', function () {
    if (passwordConfirm.value !== password.value) {
        password.style.backgroundColor = 'red';
        passwordConfirm.style.backgroundColor = 'red';
    }
    else {
        password.style.backgroundColor = 'green';
        passwordConfirm.style.backgroundColor = 'green';
    }
});