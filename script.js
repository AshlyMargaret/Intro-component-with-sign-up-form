const form = document.getElementById("form_id");
const submit = document.getElementById("submit_id");
const input = document.querySelectorAll("input");
const error = document.getElementsByClassName("error");
let comonError = document.getElementById("error_msg5");
let firstName = document.getElementById("fname_id");
let secondName = document.getElementById("lname_id");
let email = document.getElementById("email_id");
let password = document.getElementById("pswd_id");

// console.log(input);
let i;



form.addEventListener("submit",formSubmission)

function formSubmission(event){
    // console.log(event);
    event.preventDefault();

    for(i=0;i<input.length;i++){

        if(input[i].value.length == 0){
            console.log("hacked");
            input[i].style.border = "2px solid red";
            comonError.style.display = "block";   
        }
        else if (input[i].value.length != 0){
            input[i].style.border = "2px solid green"; 
        }  
       
    }

    if(input==input.length){
        window.location.href ="./sucess.html";
    }
     

}

//first name validation

let firstNameValue;  
// let fregName = /^[a-zA-Z]+$/;
let fregName = /^[a-zA-Z ]*$/;


firstName.addEventListener("keyup",firstNameValidation)

function firstNameValidation(){
    firstNameValue = firstName.value;
    console.log(firstNameValue);
    if(!firstNameValue.match(fregName)){
        document.getElementById("error_img1").style.display = "block";
        document.getElementById("error_msg1").innerHTML = "enter valid name"
    }

    else{
        document.getElementById("error_img1").style.display = "none";
        document.getElementById("error_msg1").style.display = "none";
    }   
}

 firstName.addEventListener("focusout",firstNameValidation);



 //second name validation

let secondNameValue;  
let lregName = /^[a-zA-Z ]*$/;

secondName.addEventListener("keyup",secondNameValidation)

function secondNameValidation(){
    secondNameValue = secondName.value;
    console.log(secondNameValue);
    if(!secondNameValue.match(lregName)){
        document.getElementById("error_img2").style.display = "block";
        document.getElementById("error_msg2").innerHTML = "enter valid name"
    }

    else{
        document.getElementById("error_img2").style.display = "none";
        document.getElementById("error_msg2").style.display = "none";
    }   
}

secondName.addEventListener("focusout",secondNameValidation);


//email validation

let emailValue;  
let Emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

email.addEventListener("keyup",emailValidation)

function emailValidation(){
    emailValue = email.value;
    console.log(emailValue);
    if(!emailValue.match(Emailreg)){
        document.getElementById("error_img3").style.display = "block";
        document.getElementById("error_msg3").innerHTML = "enter valid email id";
    }

    else{
        document.getElementById("error_img3").style.display = "none";
        document.getElementById("error_msg3").style.display = "none";
    }   
}

email.addEventListener("focusout",emailValidation);

// password validation

password.addEventListener("keyup",passwordValidation)

passwordValue = password.value;

function passwordValidation(){
    var error = []

    if (passwordValue.length < 8) {
        error.push("Your password must be at least 8 characters")
  }
  else{
    document.getElementById("error_msg4").style.display = "none";
  }


  if (passwordValue.search(/[a-z]/) < 0) {
       error.push("Your password must contain at least one lowercase letter.")
  }
  else{
    document.getElementById("error_msg4").style.display = "none";
  }


  if (passwordValue.search(/[A-Z]/) < 0) {
      error.push("Your password must contain at least one uppercase letter.")
  }
  else{
    document.getElementById("error_msg4").style.display = "none";
  }


//   if (passwordValue.search(/[0-9]/) < 0) {
//       error.push("Your password must contain at least one digit.")
//   }
//   if(passwordValue.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/) < 0) {
//     error.push("Your password must contain at least one special character.")
//   }
    
  if (error.length > 0) {
    document.getElementById("error_msg4").innerHTML = error.join("<br>")
    return false;
  }
  else{
    document.getElementById("error_msg4").style.display = "none";
    return true;
  }
 
}
