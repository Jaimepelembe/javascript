/*Declaration of variables */
/*Inputs*/
var carName = document.getElementById("carName");
var factoryPrice = document.getElementById("factoryPrice");
/*outputs*/
var outputCarName = document.getElementById("outputCarName");
var outputCarPrice = document.getElementById("outputCarPrice");
/* Reserve*/
var taxPercentage = document.getElementById("taxPercentage");
var dealerPercentage = document.getElementById("dealerPercentage");

function setCarName() {
  outputCarName.innerHTML = carName.value;
}

/* clean all the fields*/
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

function calculatePercentage(percentage) {
  return   Number.parseFloat(factoryPrice)*(percentage / 100);
}

function finalPrice() {
  var finalPrice = 0;

  /**Calculate the final price of the car */
  if (!isNaN(factoryPrice.value)) {
    factoryPrice = Number.parseFloat(factoryPrice.value);
    taxPercentage = Number.parseFloat(taxPercentage.value);
    dealerPercentage = Number.parseFloat(dealerPercentage.value);
    console.log("Nao e numero");
  }

  finalPrice =
    factoryPrice +
    calculatePercentage(taxPercentage) +
    calculatePercentage(dealerPercentage);

  return finalPrice;
}
function calculate() {
  setCarName();
  outputCarPrice.innerHTML = finalPrice();
}
