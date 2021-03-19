// Assignment Code
var generateBtn = document.querySelector("#generate");

// setting numeric, Upper / lower alphabet, spec char variables
function generatePassword(){

  let numberLength = 0;
  let upperCase = true;
  let lowerCase = true;
  let specialchar = true;
  let number = true;
  let alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let alphaUpper =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let special = ["!","@","#","$","%","&","?"];
  let numero = ["1","2","3","4","5","6","7","8","9"];
  let letterPull = [];
  let passWord = "";
  
  
  
  numberLength = prompt("How many characters do you want?");
  numberLength=parseInt(numberLength);
  if (isNaN(numberLength) || (8>numberLength) || (numberLength>128)) {
    alert("Must be between a number of 8 and 128");
    return;

  }

  else{
    alert("You selected " + numberLength + ".");
  }
  upperCase = confirm("Do you want Upper Case Letters? Yes or No");
  if (upperCase === true){
   letterPull=letterPull.concat(alphaUpper)
  }
  
  lowerCase = confirm("Do you want Lower Case Letters");
 if (lowerCase === true) {
    letterPull=letterPull.concat(alphaLower)
 }

  specialchar = confirm ("Do you want Special Characters");
  if(specialchar== true) {
    letterPull=letterPull.concat(special)
  }

  number = confirm ("Do you Want Numbers?");
  if(number == true) {
    letterPull=letterPull.concat(numero)
  }

    // generating random number, letter, and special characters with the for loop function
 for (let i = 0; i < numberLength; i++) {
   let charset = Math.floor(Math.random()*letterPull.length);

   charset = letterPull[charset];
   passWord = passWord.concat(charset);

 }
   return passWord;
 }



// generated password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword); {



}
