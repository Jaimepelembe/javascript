





function showAlert() {
  var name = window.prompt("Qual é o seu nome?"); /*Return a string*/
  var response = window.confirm("Você está gostando de JS?");
  window.alert("Olá " + name + " " + giveResponse(response));
}

function giveResponse(response) {
  if (response) {
    return "é bom ver que você está adorando JS";
  }
  return "continue treinando você vai aprender JS";
}