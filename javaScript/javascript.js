let userName = document.getElementById("username");
let password = document.getElementById("password");

let divs = document.querySelectorAll("#inputuser,#inputpass,#inputgen,#inputlang,#inputcountry");
// Creating paragraph before closed div
for (var i = 0; i < divs.length; i++) {
  var paragraph = document.createElement("p"); 
  divs[i].insertAdjacentElement("beforeend", paragraph);
  paragraph.classList.add("validation-style");
}
// Username Validation
function nameValidation() {
  var message = document.querySelector("#inputuser p");
  if (userName.value === "" || userName.value === null) {
    message.innerHTML = "Please Enter Your Name";
  } else if (isFinite(userName.value)) {
    message.innerHTML = "Please Enter Your Name that doesn't start with Number ";
  } else {
    message.innerHTML = "Valid";
    message.style.color = "blue";
  }
}
// Password Validation
function passwordValidation() {
  var passwordLength = password.value;
  var message = document.querySelector("#inputpass p");
  if (passwordLength.length < 8) {
    message.innerHTML = "length must be more than 8 character";
  } else {
    message.innerHTML = "Valid";
    message.style.color = "blue";
  }
}
// Gender Validation
function genValidation() {
  let radiButton = document.querySelectorAll("#inputgen input"); //1,2
  for (var i = 0; i < radiButton.length; i++) {
    var message = document.querySelector("#inputgen p");
    if (radiButton[i].checked == true) {
      message.innerHTML = "Valid";
      message.style.color = "blue";
      break;
    } else if (i == radiButton.length - 1 && radiButton[i].checked == false) { // reached The End Without choosing anything
      message.innerHTML = "Please select your Gender";
      break;
    }
  }
}
// Language Validation
function langValidation() {
  let checkButton = document.querySelectorAll("#inputlang input"); // 4 input checked
  let count = 0; // Number of checked input
  for (
    var i = 0;
    i < checkButton.length;
    i++ //0,1,2,3
  ) {
    var message = document.querySelector("#inputlang p");
    if (checkButton[i].checked == true) {
      count += 1;
      if (count == 2) {
        //two or more checked
        message.innerHTML = "Valid";
        message.style.color = "blue";
        break;
      }
    } else if (i == checkButton.length - 1 && count < 2) {// reached the end without choosing
      message.innerHTML = "Please select at least two Languages";
      break;
    }
  }
}
//Country Validation
function countryValidation() {
  var selectedValue = country.options[country.selectedIndex].value;
  var message = document.querySelector("#inputcountry p");
  if (selectedValue === "selectedcard") {
    message.innerHTML = "Please select your country";
  } else {
    message.innerHTML = "Valid";
    message.style.color = "blue";
  }
}
//when button clicked
document.getElementsByTagName("form")[0].addEventListener("submit", function (event) {
    nameValidation();
    passwordValidation();
    genValidation();
    langValidation();
    countryValidation();
    
    let p = document.querySelectorAll("p");
    for (var i = 0; i < p.length; i++) {
      if (p[i].innerHTML !== "Valid") {
        event.preventDefault();
      }
    }
    localStorage.setItem("UserName", userName.value);
  });
