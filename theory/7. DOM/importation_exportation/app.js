var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var result = document.getElementById("result");
var button = document.getElementById("calculate");

button.addEventListener("click", function (event) {
  const n1 = Number(number1.value);
  const n2 = Number(number2.value);

  result.innerText = sum(n1, n2);
});
