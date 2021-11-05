const from = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageConatainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function validateForm() {
    //using contraint API
    isValid = form.checkValidity();
    //Style main message for an error
    if(!isValid){
        message.textContent = 'Please fill out all fields';
        message.style.color = 'red';
        messageConatainer.style.borderColor = 'red';
    }
    // check to see if password matches
    if(password1El.value === password2El.value) {
        passwordMatch = true;
        password1El.style.border ='green';
        password2El.style.border = 'green';
    }
    else {
       
        passwordMatch = false;
        message.textContent = 'Make sure password matches';
        message.style.color = 'red';
        messageConatainer.borderColor ='red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';

    }
    //If form is valid and passwords matches
    if (isValid && passwordMatch) {
        
        message.textContent = 'Successfully Registred';
        message.style.color = 'green';
        messageConatainer.style.borderColor = 'green';
    }
}

function storeFormData () {
    const user = {
        name : form.name.value,
        phone : form.phone.value,
        email : form.email.value,
        website : form.url.value,
        password : form.password.value
    };
console.log(user);
}
function processFormData(e) {
    e.preventDefault();
    //validate form
    validateForm();
    // submit data if valid
    if(isValid && passwordMatch) {
        storeFormData();
    }
}

//event Listner
from.addEventListener('submit', processFormData);