/*Declaration of variables */
var outputCarName = document.getElementById("outputCarName");
var outputCarPrice = document.getElementById("outputCarPrice");
const buttonCalculate = document.querySelector("#buttonCalculate");

const modal = document.querySelector(".modal");
const buttonCloseModal = document.querySelector(".buttonCloseModal");

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
  var modal1 = document.getElementById("modal1");
  var nameAlert = document.getElementById("nameAlert");
  if (carName.value === "") {
    nameAlert.innerHTML = "Por favor, preencha o nome";
    modal1.showModal();

    return false;
  }
  var size = carName.value.length;
  if (size < 3) {
    nameAlert.innerHTML = `O nome deve ter pelo menos 3 caracteres, você inseriu ${size}`;
    modal1.showModal();
    return false;
  }
  nameAlert.innerHTML = "";
  return true;
}

//Validate factory price
function validateFactoryPrice() {
  var factoryPrice = document.getElementById("factoryPrice").value;
  factoryPrice = Number.parseFloat(factoryPrice);
  var modal2 = document.getElementById("modal2");
  var factoryPriceAlert = document.getElementById("factoryPriceAlert");

  if (isNaN(factoryPrice)) {
    factoryPriceAlert.innerHTML = "Por favor, preencha o preço de fabrica";
    modal2.showModal();

    return false;
  } else {
    if (factoryPrice < 0) {
      factoryPriceAlert.innerHTML = "O preço do carro não pode ser negativo!";
      modal2.showModal();

      return false;
    } else {
      if (factoryPrice < 100000) {
        factoryPriceAlert.innerHTML =
          "O preço do carro deve ser superior a 100.000,00 mts";
        modal2.showModal();

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
  var taxPercentageAlert = document.getElementById("taxPercentageAlert");
  var modal3 = document.getElementById("modal3");

  if (taxPercentage <= 20) {
    taxPercentageAlert.innerHTML =
      "A percentagem de imposto não pode ser inferior a 20%";
    modal3.showModal();

    return false;
  } else {
    if (taxPercentage >= 60) {
      taxPercentageAlert.innerHTML =
        "A percentagem de imposto não pode ser superior a 60%";
      modal3.showModal();

      return false;
    }
  }
  return true;
}

//Validate tax percentage
function validadeDealerPercentage() {
  var dealerPercentage = document.getElementById("dealerPercentage").value;
  dealerPercentage = Number.parseFloat(dealerPercentage);
  var dealerPercentageAlert = document.getElementById("dealerPercentageAlert");
  var modal4 = document.getElementById("modal4");

  if (dealerPercentage < 10) {
    dealerPercentageAlert.innerHTML =
      "A percentagem do revendedor não pode ser inferior a 10%";
    modal4.showModal();

    return false;
  } else {
    if (dealerPercentage > 50) {
      dealerPercentageAlert.innerHTML =
        "A percentagem do revendedor não pode ser superior a 50%";
      modal4.showModal();

      return false;
    }
  }
  return true;
}

/*Modal */
function closeModal(id) {
  const modal = document.getElementById(id);
  modal.close();
}
