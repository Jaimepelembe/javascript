function validateLength() {
  var passwordLength = document.getElementById("inputLength").value;
  var modal1 = document.getElementById("modal1");
  var inputLengthAlert = document.getElementById("inputLengthAlert");

  passwordLength = Number.parseInt(passwordLength);

  if (passwordLength < 8) {
    inputLengthAlert.innerHTML = "The password length can't be smaller than 8";
    modal1.showModal();

    return false;
  }

  if (passwordLength > 40) {
    inputLengthAlert.innerHTML = "The password length can't be bigger than 40";
    modal1.showModal();

    return false;
  }

  inputLengthAlert.innerHTML = "";
  return true;
}

function validateName() {
  var carName = document.getElementById("carName");

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
