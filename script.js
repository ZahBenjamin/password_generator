var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var count = Number(prompt("Please enter the amount of characters you would like in your password."));
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var selectedCharacters = [];

  if (count < 8 || count > 128) {
    alert("Please put in a valid number between 8-128");
    return writePassword();
  } 

  var confirmLower = confirm("Would you like lower case letters?");
  var confirmUpper = confirm("Would you like uppercase letters?");
  var confirmNumbers = confirm("Would you like numbers?");
  var confirmSpecial = confirm("Would you like special characters?");
  while(confirmLower === false && confirmUpper === false && confirmNumbers === false && confirmSpecial === false) {
    alert("Come on man you have to choose at least one");
    var confirmLower = confirm("Would you like lower case letters?");
    var confirmUpper = confirm("Would you like uppercase letters?");
    var confirmNumbers = confirm("Would you like numbers?");
    var confirmSpecial = confirm("Would you like special characters?");
  }
  if (confirmLower){
    selectedCharacters = selectedCharacters.concat(lowercase)
  }

  if (confirmUpper){
    selectedCharacters = selectedCharacters.concat(uppercase)
  }

  if (confirmNumbers){
    selectedCharacters = selectedCharacters.concat(number)
  }

  if (confirmSpecial){
    selectedCharacters = selectedCharacters.concat(special)
  }

  var genPassword = "";
  for (var i = 0; i < count ; i++) {
     genPassword += selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
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
