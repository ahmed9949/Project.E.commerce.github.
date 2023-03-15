const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e =>{
    e.preventDefault();
    validateInputs();
});

const setError = (element,message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText=' ';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};




const validateInputs = () => {
    const usernameVal= username.value.trim();
    const emailVal= email.value.trim();
    const passwordVal= password.value.trim();
if (usernameVal ===''){
setError(username,'Please fill in this field.');
} else{
setSuccess(username);
}
if(emailVal ===' '){
    setError(email,'Please fill in this field.');
}
if(passwordVal ===''){
    setError(password,'Please fill in this field.');
} else if(passwordVal.length < 8 ){
    setError(password,'must be more than 8 char');
}else{
    setSuccess(password);
}


};
