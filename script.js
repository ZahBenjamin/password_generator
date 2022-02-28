var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var count = Number(prompt("Please enter the amount of characters you would like in your password."));
  console.log(count)

  if (count < 8 || count > 128) {
    alert("Please put in a valid number between 8-128");
    console.log("Please put in a valid number between 8-128");
    return writePassword();
  } 

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJLKMNOPQRSTUVWXYZ";
  var number = "0123456789";
  var special = "~!@#$%^&*()_+=[]{}|<>";
  var genPassword = '',
  var selectedCriteria = '',

  if (confirm)

  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * lowercase.length) + Math.floor(Math.random() * uppercase.length) + Math.floor(Math.random() * number.length) +specialMath.floor(Math.random() * special.length);
     genPassword += random;
  }

  console.log(genPassword);

  return genPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
