// Assignment code here
const minimumPasswordLength = 8;
const maximumPasswordLength = 128;
let password = "";
let passwordCharacters = "";
const passwordLowercase = "abcdefghijklmnopqrstuvwxyz";
const passwordUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const passwordNumbers = "0123456789";
const passwordSpecialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

const generatePassword = () => {
    // This function generaes a password based on user input

    // prompt user for password length
    let passwordLength = prompt("Set a password length? (8-128)");

    passwordLength = parseInt(passwordLength); // convert passwordLength to an integer

    if (isNaN(passwordLength)) {
        // alert user if password length is not a number
        alert("Password Length must be a number");
        return; // return to prevent further execution
    }

    if (
        // check if password length is between 8 and 128
        passwordLength < minimumPasswordLength ||
        passwordLength > maximumPasswordLength
    ) {
        // alert user if password length is not between 8 and 128
        alert("Password Length must be between 8 and 128");
        return; // return to prevent further execution
    }
};

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
