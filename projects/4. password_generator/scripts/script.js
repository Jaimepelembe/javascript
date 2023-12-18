//DOM elements
const ouputPassword = document.getElementById("ouputPassword");
const passwordLength = document.getElementById("inputLength");
passwordLength.value = "20";
const inputUpperCase = document.getElementById("inputUpperCase");
const inputLowerCase = document.getElementById("inputLowerCase");
const inputNumber = document.getElementById("inputNumber");
const inputSymbols = document.getElementById("inputSymbols");
const buttonGenerate = document.getElementById("buttonGenerate");
const buttonClean = document.getElementById("buttonClean");
const buttonCopy = document.getElementById("buttonCopy");

const randomFunction = {
  lowerCase: getRandomLowerCase,
  upperCase: getRandomUpperCase,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

function GeneratePassword() {
  const length = passwordLength.value;
  const UpperCase = inputUpperCase.value;
  const LowerCase = inputLowerCase.value;
  const number = inputNumber.value;
  const symbol = inputSymbols.value;

  window.alert(length);
}

function validateLength() {
  var passwordLength = document.getElementById("inputLength").value;
  var modal1 = document.getElementById("modal1");
  inputLengthAlert = document.getElementById("inputLengthAlert");
  passwordLength = Number.parseInt(passwordLength);

  if (isNaN(passwordLength)) {
    inputLengthAlert.innerHTML = "Por favor, insira o comprimento da senha";
    modal1.showModal();

    return false;
  } else {
    if (passwordLength < 8) {
      inputLengthAlert.innerHTML =
        "The password length can't be smaller than 8";
      modal1.showModal();

      return false;
    }

    if (passwordLength > 40) {
      inputLengthAlert.innerHTML =
        "The password length can't be bigger than 40";
      modal1.showModal();

      return false;
    }
  }

  inputLengthAlert.innerHTML = "";
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
