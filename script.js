var generateBtn = document.querySelector("#generate");


var confirmSpecial;
var Numbers;
var confirmLower;
var confirmUpper;


function generatePassword() {
  var count = Number(prompt("Please enter the amount of characters you would like in your password."));
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  if (count < 8 || count > 128) {
    alert("Please put in a valid number between 8-128");
    return writePassword();
  } 



  for (var i = 0; i < count ; i++) {
     genPassword += selectedCriteria[Math.floor(Math.random() * selectedCriteria.length)];
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
