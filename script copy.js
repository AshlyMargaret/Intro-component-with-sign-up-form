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

    firstNameValidation();
    secondNameValidation();
    emailValidation();
    passwordValidation();


//     if( firstNameValue!=null || secondNameValue !=null || emailValue!=null || passwordValue!=null){
//         window.location.reload();
//         alert("reloaded")
//        }
// else{

   

// }
        
       


}


//first name validation

let firstNameValue;  
// let fregName = /^[a-zA-Z]+$/;
let nameValidationRegex = /^[a-zA-Z ]*$/;


firstName.addEventListener("keyup",firstNameValidation)

function firstNameValidation(){
    firstNameValue = firstName.value;
    console.log(firstNameValue);
    if(!firstNameValue.match(nameValidationRegex)){
        document.getElementById("error_img1").style.display = "block";
        document.getElementById("error_msg1").innerHTML = "Enter valid name"
    }

    else if(firstNameValue.length ==0) {
        document.getElementById("error_img1").style.display = "block";
        document.getElementById("error_msg1").innerHTML = "enter valid name"
       
    }
    else{
        document.getElementById("error_img1").style.display = "none";
        document.getElementById("error_msg1").style.display = "none";
        return true;
        
    }
}

 firstName.addEventListener("focusout",firstNameValidation);



 //second name validation

let secondNameValue;  


secondName.addEventListener("keyup",secondNameValidation)

function secondNameValidation(){
    secondNameValue = secondName.value;
    console.log(secondNameValue);
    if(!secondNameValue.match(nameValidationRegex)){
        document.getElementById("error_img2").style.display = "block";
        document.getElementById("error_msg2").innerHTML = "enter valid name"
    }
    else if( secondNameValue.length ==0) {
        document.getElementById("error_img2").style.display = "block";
        document.getElementById("error_msg2").innerHTML = "enter valid name"
       
    }
    else{
        document.getElementById("error_img2").style.display = "none";
        document.getElementById("error_msg2").style.display = "none";
        return true;
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

    else if( emailValue.length ==0) {
        document.getElementById("error_img3").style.display = "block";
        document.getElementById("error_msg3").innerHTML = "enter valid name"
       
    }
    else{
        document.getElementById("error_img3").style.display = "none";
        document.getElementById("error_msg3").style.display = "none";
        return true;
    } 
}

email.addEventListener("focusout",emailValidation);

// password validation

password.addEventListener("keyup",passwordValidation)
password.addEventListener("focusout",passwordValidation)


let passwordValue;
function passwordValidation(){
    passwordValue = password.value;
    console.log(passwordValue)
    var error = []

    if (passwordValue.length < 8) {
        error.push("Your password must be at least 8 characters");  
        document.getElementById("error_img4").style.display = "block";
        // password.style.border = " 1px solid red";
  }
  else{
   
    return true;
   
  }


  if (passwordValue.search(/[a-z]/) < 0) {
       error.push("Your password must contain at least one lowercase letter.");
       document.getElementById("error_img4").style.display = "block";
    //    password.style.border = " 1px solid red";
  }
  else{
   
    return true;
 
  }


  if (passwordValue.search(/[A-Z]/) < 0) {
      error.push("Your password must contain at least one uppercase letter.");  
      document.getElementById("error_img4").style.display = "block";
    //   password.style.border = " 1px solid red";
  }
  else{
     return true;
   
  }

  if (error.length > 0) {
    document.getElementById("error_msg4").innerHTML = error.join(",")
    // password.style.border = " 1px solid red";
    return false;
  }
  else{
   
    return true;
  }
 
}

// focus in validation

form.addEventListener("focusin",()=>{
    document.getElementById("error_img1").style.display = "none";
    document.getElementById("error_msg1").innerHTML = " ";
    document.getElementById("error_img2").style.display = "none";
    document.getElementById("error_msg2").innerHTML = " ";
    document.getElementById("error_img3").style.display = "none";
    document.getElementById("error_msg3").innerHTML = " ";
    document.getElementById("error_img4").style.display = "none";
    document.getElementById("error_msg4").innerHTML = " ";
     }
      
)


