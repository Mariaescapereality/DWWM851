/*
//name
const form = document.getElementById('my-form');
const nameRegex = /^[a-zA-Z ]{2,30}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
 
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = form.elements['name'];
  const emailInput = form.elements['email'];
  const passwordInput = form.elements['password'];
 
  if (!nameRegex.test(nameInput.value)) {
    alert('Please enter a valid name');
    return;
  }
 
  if (!emailRegex.test(emailInput.value)) {
    alert('Please enter a valid email');
    return;
  }
 
  if (!passwordRegex.test(passwordInput.value)) {
    alert('Please enter a valid password (must contain at least 8 characters, including 1 uppercase, 1 lowercase, and 1 number)');
    return;
  }
 
  form.submit();
});*/
/*//number
function validate()
{
  var phoneNumber = document.getElementById('phone-number').value;
  var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  var phoneResult = phoneRGEX.test(phoneNumber);
  alert("phone:"+phoneResult );
}
function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
      alert("Valid email address!");
  
      document.form1.text1.focus();
  
      return true;
  
    } else {
  
      alert("Invalid email address!");
  
      document.form1.text1.focus();
  
      return false;
  
    }
  
  };*/


// timeout before a callback is called

/*let timeout;

// traversing the DOM and getting the input and span using their IDs

let password = document.getElementById('PassEntry')
let strengthBadge = document.getElementById('StrengthDisp')

// The strong and weak password Regex pattern checker

let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

function StrengthChecker(PasswordParameter){
    // We then change the badge's color and text based on the password strength

    if(strongPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "green"
        strengthBadge.textContent = 'Strong'
    } else if(mediumPassword.test(PasswordParameter)){
        strengthBadge.style.backgroundColor = 'blue'
        strengthBadge.textContent = 'Medium'
    } else{
        strengthBadge.style.backgroundColor = 'red'
        strengthBadge.textContent = 'Weak'
    }
}

// Adding an input event listener when a user types to the  password input 

password.addEventListener("input", () => {

    //The badge is hidden by default, so we show it

    strengthBadge.style.display= 'block'
    clearTimeout(timeout);

    //We then call the StrengChecker function as a callback then pass the typed password to it

    timeout = setTimeout(() => StrengthChecker(password.value), 500);

    //Incase a user clears the text, the badge is hidden again

    if(password.value.length !== 0){
        strengthBadge.style.display != 'block'
    } else{
        strengthBadge.style.display = 'none'
    }
});*/

/*function validate() { 
  
    var user = document.getElementById("c").value; 
    var user2 = document.getElementById("c"); 
    var re = /^[7-9][0-9]{9}$/; 
    if (re.test(user)) { 
        alert("done"); 
        return true; 
    } 
    else { 

        user2.style.border = "red solid 3px"; 
        return false; 
    } 
} */
//bar
//const pass = document.querySelector(#pass);
const progress = document.querySelector(".progress");
pass.addEventListner("input", check)
function check(e) 
{
let v = 0;
v += /[a-z]/.test(e.target.value)? 1:0;
v += /[A-Z]/.test(e.target.value)? 1:0;
v += /\d/.test(e.target.value)? 1:0;
v += /[@$!%*?&]/.test(e.target.value)? 1:0;
v += e.target.value >= 8 ? 1:0;
v += /[A-Za-z\@$!%*?&]+$/.test(e.target.value)? 1:0;
console.log(v);

switch(v)
{
  case -1:
  case 0:
      progress.style.backgroundColor = "";
      break;
  case 1:
    progress.style.backgroundColor = "red";
    break;
    case 2:
      progress.style.backgroundColor = "orangered";
      break; 
      case 3:
      progress.style.backgroundColor = "orange";
      break; 
      case 4:
      progress.style.backgroundColor = "yellow";
      break; 
      case 5:
      progress.style.backgroundColor = "green";
      break; 
      
}
progress.style.width = v*20+"%";
// version couleur sans switch :
const colors = ["", "red", "orangered", "orange", "yellow", "green"]
progress.style.backgroundColor = colors[v];
}
/*function goodName()
{
  if (nomOk.test(nom))
};*/
