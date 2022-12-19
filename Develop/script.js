// Assignment code here
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let numbers = ["1","2","3","4","5","6","7","8","9"]
let specialCharc = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","'","{","|","}","~"]
let charcLength = 8;
let passwordArry = [];



function generatePassword() {
  console.log('You pressed the button!')
  let password = "";
   
  for (let i = 0; i < charcLength; i++) {
    let randomIndex = Math.floor(Math.random() * passwordArry.length);
    password = password + passwordArry[randomIndex];
   }
   return password;
}  
  


function promptAns() {
   passwordArry = [];
   charcLength = parseInt(prompt("Length of password? 8-128 characters?"));

   if (isNaN(charcLength) || charcLength < 8 || charcLength > 128) {
    alert("Character has to be a number between 8 - 128")
    return false;
   }

   if (confirm("Would you like to use lowercase letters?")) {
    passwordArry = passwordArry.concat(lowerCase);
   }

   if (confirm("Would you like to use uppercase letters?")) {
    passwordArry = passwordArry.concat(upperCase);
   }

   if (confirm("Would you like to use any numbers?")) {
    passwordArry = passwordArry.concat(numbers);
   }

   if (confirm("Would you like to use any special characters?")) {
    passwordArry = passwordArry.concat(specialCharc);
   }
   return true;
  }



  // 1. promp the user for the pasword criteria
  //  a. password lenghth 8-128
  //  b.lower case, upper case, special characters 
  // 2. validte the input.
  // 3. generate password based on criteria
  // 4. display the generated password to the page
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let noError = promptAns();
  if (noError) {
  
    var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
