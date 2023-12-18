//DOM elements
const outputPassword = document.getElementById("outputPassword");
var passwordLength = document.getElementById("inputLength");
passwordLength.value = "20";
var inputUpperCase = document.getElementById("inputUpperCase");
var inputLowerCase = document.getElementById("inputLowerCase");
var inputNumber = document.getElementById("inputNumber");
var inputSymbols = document.getElementById("inputSymbols");
const buttonGenerate = document.getElementById("buttonGenerate");
const buttonClean = document.getElementById("buttonClean");
const buttonCopy = document.getElementById("buttonCopy");
const form = document.getElementById("form");
var typesCount = -1;

//Modal
var modal1 = document.getElementById("modal1");
var inputLengthAlert = document.getElementById("inputLengthAlert");

function getFormProprities() {
  const length = Number.parseInt(passwordLength.value);
  const hasUpperCase = inputUpperCase.checked;
  const hasLowerCase = inputLowerCase.checked;
  const hasNumber = inputNumber.checked;
  const hasSymbol = inputSymbols.checked;
  const arrayTypes = buildArrayTypes(
    hasUpperCase,
    hasLowerCase,
    hasNumber,
    hasSymbol
  );

  generatePassword(length, hasUpperCase, hasLowerCase, arrayTypes);
}

//2. Filter out unchecked types
function buildArrayTypes(hasUpperCase, hasLowerCase, hasNumber, hasSymbol) {
  var arrayTypes = {};
  var count = -1;
  if (hasUpperCase) {
    count++;
    arrayTypes[count] = "hasUpperCase";
  }
  if (hasLowerCase) {
    count++;
    arrayTypes[count] = "hasLowerCase";
  }
  if (hasNumber) {
    count++;
    arrayTypes[count] = "hasNumber";
  }
  if (hasSymbol) {
    count++;
    arrayTypes[count] = "hasSymbol";
  }
  typesCount = count;
  return arrayTypes;
}

function generatePassword(length, hasUpperCase, hasLowerCase, arrayTypes) {
  //1. Initialize the password variable
  //2. Filter out unchecked types
  //3. Loop over length call generator function for each type
  //4. Add final password to the password variable and put on outputPassword

  var generatedPassword = "";

  if (
    validateLength() &&
    validateCheckboxes(typesCount, hasUpperCase, hasLowerCase)
  ) {
    var randomOperation;
    console.log("Quantidade input: ", typesCount);
    for (var i = 0; i < length; i++) {
      randomOperation = arrayTypes[getRandomInt(typesCount + 1)];

      switch (randomOperation) {
        case "hasUpperCase":
          generatedPassword += getRandomUpperCase();
          break;

        case "hasLowerCase":
          generatedPassword += getRandomLowerCase();
          break;

        case "hasNumber":
          generatedPassword += getRandomNumber();
          break;

        case "hasSymbol":
          generatedPassword += getRandomSymbol();
          break;
      }
    }
    outputPassword.value = generatedPassword;
  } else {
    outputPassword.value = "";
  }
}

//Validate functions
function validateLength() {
  length = Number.parseInt(passwordLength.value);

  if (isNaN(length)) {
    inputLengthAlert.innerHTML = "Please, insert the length of the password";
    modal1.showModal();

    return false;
  } else {
    if (length < 8) {
      inputLengthAlert.innerHTML =
        "The password length can't be smaller than 8";
      modal1.showModal();

      return false;
    }

    if (length > 40) {
      inputLengthAlert.innerHTML =
        "The password length can't be bigger than 40";
      modal1.showModal();

      return false;
    }
  }

  inputLengthAlert.innerHTML = "";
  return true;
}

function validateCheckboxes(typesCount, hasUpperCase, hasLowerCase) {
  const outputPasswordAlert = inputLengthAlert;
  if (typesCount === -1) {
    outputPasswordAlert.innerHTML =
      "Please, select at least one checkbox propriety";
    modal1.showModal();
    return false;
  } else {
    if (hasUpperCase == false && hasLowerCase == false) {
      outputPasswordAlert.innerHTML =
        "Please, select at least one type of letter";
      modal1.showModal();
      return false;
    }
  }

  return true;
}

//Generator function
function getRandomInt(max) {
  return Math.floor(Math.random() * max); //Return a number bigger than 0 and less than max
}
function getRandomLowerCase() {
  return String.fromCharCode(97 + getRandomInt(26));
}

function getRandomUpperCase() {
  return String.fromCharCode(65 + getRandomInt(26));
}

function getRandomNumber() {
  return String.fromCharCode(48 + getRandomInt(10));
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.|~-+:";
  return symbols[getRandomInt(symbols.length)];
}

//Reset
function reset() {
  inputLowerCase.checked = false;
  inputUpperCase.checked = false;
  inputNumber.checked = false;
  inputSymbols.checked = false;

  if (passwordLength != 20) {
    passwordLength.value = 20;
  }
}
