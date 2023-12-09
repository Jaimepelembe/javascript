/*Declaration of variables */
var outputCarName = document.getElementById("outputCarName");
var outputCarPrice = document.getElementById("outputCarPrice");

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
  setCarName();
  outputCarPrice.innerHTML = finalPrice();
}
