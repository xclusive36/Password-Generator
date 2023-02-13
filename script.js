// Assignment code here
const generatePassword = () => {
    // This function generaes a password based on user input

    // Declare variables
    const minimumPasswordLength = 8;
    const maximumPasswordLength = 128;
    let password = "";
    let passwordCharacters = "";
    const passwordLowercase = "abcdefghijklmnopqrstuvwxyz";
    const passwordUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordNumbers = "0123456789";
    const passwordSpecialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

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

    // confirm user wants to include lowercase letters
    const passwordLowercaseConfirm = confirm("Include lowercase letters?");

    // confirm user wants to include uppercase letters
    const passwordUppercaseConfirm = confirm("Include uppercase letters?");

    // confirm user wants to include numbers
    const passwordNumbersConfirm = confirm("Include numbers?");

    // confirm user wants to include special characters
    const passwordSpecialCharactersConfirm = confirm(
        "Include special characters?"
    );

    if (passwordLowercaseConfirm) {
        // add lowercase letters to passwordCharacters
        passwordCharacters += passwordLowercase;
    }

    if (passwordUppercaseConfirm) {
        // add uppercase letters to passwordCharacters
        passwordCharacters += passwordUppercase;
    }

    if (passwordNumbersConfirm) {
        // add numbers to passwordCharacters
        passwordCharacters += passwordNumbers;
    }

    if (passwordSpecialCharactersConfirm) {
        // add special characters to passwordCharacters
        passwordCharacters += passwordSpecialCharacters;
    }

    if (passwordCharacters === "") {
        // alert user if no character types were selected
        alert(
            "You must select at least one type of character to include in your password"
        );
        return; // return to prevent further execution
    }

    for (let i = 0; i < passwordLength; i++) {
        // For loop iterates through passwordLength.
        // Each iteration, a random character is added to the password string

        password += passwordCharacters.charAt(
            // Adds a random character to the password string by using
            // the javascript functions Math.floor and Math.random.
            Math.floor(Math.random() * passwordCharacters.length)
        );
    }

    return password; // returns the newly generated password string
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
