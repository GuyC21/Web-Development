//checks if the email given in the sign-up textbox is valid
function validateEmail (emailAdress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } 
  else {
    return false; 
  }
}

//alerts if sign up worked correctly
document.getElementById("registerButton").onclick = function() {
    var usernameVal = document.getElementById("emailValue").value;
    if (validateEmail(usernameVal)) {
        alert('Registered Succesfuly');
    }
    else {
        alert ('Failed to register, please check again the mail you provided');
    }
}