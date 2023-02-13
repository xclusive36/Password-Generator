// Assignment code here
const minimumPasswordLength = 8;
const maximumPasswordLength = 128;
let password = "";
let passwordCharacters = "";
const passwordLowercase = "abcdefghijklmnopqrstuvwxyz";
const passwordUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const passwordNumbers = "0123456789";
const passwordSpecialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
