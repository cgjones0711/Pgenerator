// Assignment Code
var generateBtn = document.querySelector("#generate");


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
  
  
  
  
  numberLength = prompt("How many characters do you want?");
  if (isNaN(numberLength) || (8>numberLength) || (numberLength>128)) {
    alert("Must be between a number of 8 and 128");
    return;

  }
  else{
    alert("You selected " + numberLength + ".");
  }
  alphaUpper = prompt("Do you want Upper Case Letters? Yes or No");
  if (alphaUpper === true){
   letterPull.concat(alphaUpper)
  }
  alphaLower = prompt ("Do you want Lower Case Letters");
 if (alphaLower === true) {
    letterPull.concat(alphaLower)
 }

  special = prompt ("Do you want Special Characters");
  if(special == true) {
    letterPull.concat(special)
  }

  numero = prompt ("Do you Want Numbers?");
  if(numero == true) {
    letterPull.concat(numero)
  }
//parsent number length 
    if (isNaN(!numberLength) || (8>numberLength) || (numberLength>128)) {
    alert("Must be between a number of 8 and 128");
    return;

  }
  else{
    alert("You selected " + numberLength + ".");
    // generate random number based on the length of the array that we are concatinating off of. 

 

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



}
