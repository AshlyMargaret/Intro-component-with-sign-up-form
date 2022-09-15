const form = document.getElementById("form_id");
const submit = document.getElementById("submit_id");
const input = document.querySelectorAll("input");
const error = document.getElementsByClassName("error");
let comonError = document.getElementById("error_msg5");
let firstName = document.getElementById("fname_id");
let secondName = document.getElementById("lname_id");
let email = document.getElementById("email_id");
let password = document.getElementById("pswd_id");


function bindListners() {
    firstName.addEventListener("keyup", validateFirstName);
    firstName.addEventListener("focusout", validateFirstName);
    secondName.addEventListener("keyup", validateLastName);
    secondName.addEventListener("focusout", validateLastName);
    email.addEventListener("keyup", validateEmail);
    email.addEventListener("focusout", validateEmail);
    password.addEventListener("keyup", validatePassword);
    password.addEventListener("focusout", validatePassword);
}




function isNameValid(name) {
    let nameValidationRegex = /^[a-zA-Z ]*$/;
    if (name && name.match(nameValidationRegex) && name.trim().length > 0) {
        return true;
    }
    return false;
}


function validateFirstName() {
    let firstNameValue = firstName.value;
    if (isNameValid(firstNameValue)) {
      
        showErrorForInputField("error_img1", "error_msg1", null)
        return firstNameValue;
    }
    showErrorForInputField("error_img1", "error_msg1", "enter valid name");
    return null;
}

function validateLastName() {
    let lastNameValue = secondName.value;
    if (isNameValid(lastNameValue)) {
       
        showErrorForInputField("error_img2", "error_msg2", null)
        return lastNameValue;
    }
    showErrorForInputField("error_img2", "error_msg2", "enter valid name");
    return undefined;
}


// Email Validation

function isEmailValid(email) {
    let emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email && email.match(emailValidationRegex) && email.trim().length > 0) {
        return true;
    }
    return false;
}


function validateEmail() {
    let emailValue = email.value;
    if (isEmailValid(emailValue)) {
       
        showErrorForInputField("error_img3", "error_msg3", null)
        console.log("emailsucess");
        return emailValue;
    }
    showErrorForInputField("error_img3", "error_msg3", "enter valid email");
    console.log("emailerror");
    return undefined;
}


// password validation

function ispasswordValid(pswd) {
    let passwordValidationRegex = /^(?=.*\d).{4,8}$/;
    if (pswd && pswd.match(passwordValidationRegex) && pswd.trim().length > 0) {
        console.log("error pswd1")
        return true;
    }
    console.log("error pswd2")
    return false;
}


function validatePassword() {
    let passwordValue = password.value;
    if (ispasswordValid(passwordValue)) {
        
        showErrorForInputField("error_img4", "error_msg4", null)

        return passwordValue;
    }
    showErrorForInputField("error_img4", "error_msg4", "Password must be between 4 and 8 digits long and include at least one numeric digit.");

    return undefined;
}




function showErrorForInputField(errorImageId, errorMesssageId, error) {
   


    document.getElementById(errorImageId).style.display = error ? "block" : "none";
    document.getElementById(errorMesssageId).innerHTML = error ? error : null;
}

bindListners();

form.addEventListener("submit", (event) => {
    event.preventDefault();
        const firstName = validateFirstName();
        const secondName = validateLastName();
        const email = validateEmail();
        const password = validatePassword();
        if (firstName && secondName && email && password) {
            alert(`${firstName} ${secondName} sucessfully registered`);
        } else {
            return;
        }   
});

document.getElementById("btn_cancel").addEventListener("click",clearFields);
function clearFields(){
    console.log("cancel button worked")
    form.reset();
}