/*Declaration of variables */
var outputCarName = document.getElementById("outputCarName");
var outputCarPrice = document.getElementById("outputCarPrice");
const buttonCalculate = document.querySelector("#buttonCalculate");
var nameAlert = document.getElementById("nameAlert");

function setCarName() {
  var carName = document.getElementById("carName");
  outputCarName.innerHTML = carName.value;
}

/* Reset all the fields*/
function reset() {
  carName.value = "";
  factoryPrice.value = "";
  outputCarName.innerHTML = "";
  outputCarPrice.innerHTML = "";
  resetPercentages();
}

function resetPercentages() {
  if (taxPercentage.value != 45) {
    taxPercentage.value = 45;
  }

  if (dealerPercentage.value != 28) {
    dealerPercentage.value = 28;
  }
}

function calculatePercentage(percentage, factoryPrice) {
  return factoryPrice * (percentage / 100);
}

function finalPrice() {
  /*Calculate the final price of the car */
  var finalPrice = 0.0;
  var factoryPrice = document.getElementById("factoryPrice").value; //Return a String
  var taxPercentage = document.getElementById("taxPercentage").value;
  var dealerPercentage = document.getElementById("dealerPercentage").value;
  var coin;

  factoryPrice = Number.parseFloat(factoryPrice);
  taxPercentage = Number.parseFloat(taxPercentage);
  dealerPercentage = Number.parseFloat(dealerPercentage);

  finalPrice =
    factoryPrice +
    calculatePercentage(taxPercentage, factoryPrice) +
    calculatePercentage(dealerPercentage, factoryPrice);

  //Format of  the coin
  coin = { style: "currency", currency: "USD" };
  finalPrice = finalPrice.toLocaleString("pt-BR", coin);
  return finalPrice;
}

function calculate() {
  if (
    validateName() &&
    validateFactoryPrice() &&
    validadeTaxPercentage() &&
    validadeDealerPercentage()
  ) {
    setCarName();
    outputCarPrice.innerHTML = finalPrice();
  } else {
    outputCarName.innerHTML = "";
    outputCarPrice.innerHTML = "";
  }
}
/*
buttonCalculate.addEventListener("click", (event) => {
  event.preventDefault();
});*/

//Verify if the name is valid
function validateName() {
  var carName = document.getElementById("carName");

  if (carName.value === "") {
    //alert("O nome não pode estar vázio");
    nameAlert.innerHTML = "O nome não pode estar vázio";
    return false;
  }
  var size = carName.value.length;
  if (size < 3) {
    //alert(`O nome deve ter pelo menos 3 caracteres, você inseriu ${size}`);
    nameAlert.innerHTML = `O nome deve ter pelo menos 3 caracteres, você inseriu ${size}`;
    return false;
  }
  nameAlert.innerHTML = "";
  return true;
}

//Validate factory price
function validateFactoryPrice() {
  var factoryPrice = document.getElementById("factoryPrice").value;
  factoryPrice = Number.parseFloat(factoryPrice);

  if (isNaN(factoryPrice)) {
    alert("O preço não pode estar vázio!");
    return false;
  } else {
    if (factoryPrice < 0) {
      alert("O preço do carro não pode ser negativo!");
      return false;
    } else {
      if (factoryPrice < 100000) {
        alert("O preço do carro deve ser superior a 100.000,00 mts");
        return false;
      }
    }
  }
  return true;
}

//Validate tax percentage
function validadeTaxPercentage() {
  var taxPercentage = document.getElementById("taxPercentage").value;
  taxPercentage = Number.parseFloat(taxPercentage);
  if (taxPercentage <= 20) {
    alert("A percentagem de imposto não pode ser inferior a 20%");
    return false;
  } else {
    if (taxPercentage >= 60) {
      alert("A percentagem de imposto não pode ser superior a 60%");
      return false;
    }
  }
  return true;
}

//Validate tax percentage
function validadeDealerPercentage() {
  var dealerPercentage = document.getElementById("dealerPercentage").value;
  dealerPercentage = Number.parseFloat(dealerPercentage);
  if (dealerPercentage < 10) {
    alert("A percentagem do revendedor não pode ser inferior a 10%");
    return false;
  } else {
    if (dealerPercentage > 50) {
      alert("A percentagem do revendedor não pode ser superior a 50%");
      return false;
    }
  }
  return true;
}

function cleanAlert() {
  if (!validateName()) {
  }
}
