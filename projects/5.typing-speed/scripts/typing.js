var key, currentLetter, currentWord, previousWord, expected;
var isLetter;
var letter, word, words;
var nextLetter, previousLetter;
var letterPositionLeft = 20;
var letterPositionTop = 8;
var wordMarginTop = 0,
  isTimerStarted = false,
  gameTimer = null;
var timeGameStarted = null,
  currentTime = null,
  mileSecondsPassed = null,
  secondsPassed = null,
  minutesDefinedToPlay = 1,
  secondsDefinedToPlay = null,
  secondsLeftToPlay = null;
timerInfo = document.getElementById("info");
var buttonNewGame = document.getElementById("buttonNewGame");

var textNationalAnthem =
  "Na memória de África e do mundo Pátria bela dos que ousaram lutar Moçambique, o teu nome é liberdade O sol de junho para sempre brilhará Moçambique, nossa terra gloriosa Pedra a pedra construindo um novo dia Milhões de braços, uma só força Oh, Pátria amada, vamos vencer Moçambique, nossa terra gloriosa Pedra a pedra construindo um novo dia Milhões de braços, uma só força Oh, Pátria amada,  amos vencer Povo unido do Rovuma ao Maputo Colhe os frutos do combate pela paz Cresce o sonho ondulando na bandeira E vai lavrando na certeza do amanhã Moçambique, nossa terra gloriosa Pedra a pedra construindo um novo dia Milhões de braços,uma só força Oh, Pátria amada, vamos vencer Moçambique, nossa terra gloriosa Pedra a pedra construindo um novo dia Milhões de braços, uma só força Oh, Pátria amada, vamos vencer";

const wordsCountNationalAnthem = textNationalAnthem.length;

var textMozambique =
  "Moçambique, oficialmente designado como República de Moçambique, é um país localizado no sudeste do continente Africano, banhado pelo oceano Índico a leste e que faz fronteira com a Tanzânia ao norte; Maláui e Zâmbia a noroeste; Zimbábue a oeste e Essuatíni e África do Sul a sudoeste. A capital e maior cidade do país é Maputo, anteriormente chamada de Lourenço Marques, durante o domínio português. Entre o primeiro e o século V, povos bantus migraram de regiões do norte e oeste para essa região. Portos comerciais suaílis e, mais tarde, árabes, existiram no litoral moçambicano até a chegada dos europeus. A área foi reconhecida por Vasco da Gama em 1498 e em 1505 foi anexada pelo Império Português. Depois de mais de quatro séculos de domínio português, Moçambique tornou-se independente em 25 de Junho de 1975, transformando-se na República Popular de Moçambique pouco tempo depois. Após apenas dois anos de independência, o país mergulhou em uma guerra civil intensa e prolongada que durou de 1977 a 1992. Em 1994, o país realizou as suas primeiras eleições multipartidárias e manteve-se como uma república presidencial relativamente estável desde então.  Moçambique é dotado de ricos e extensos recursos naturais. A economia do país é baseada principalmente na agricultura, mas o sector industrial, principalmente na fabricação de alimentos, bebidas, produtos químicos, alumínio e petróleo, está crescendo. O sector de turismo do país também está em crescimento. A África do Sul é o principal parceiro comercial de Moçambique e a principal fonte de investimento directo estrangeiro. Portugal, Brasil, Espanha e Bélgica também estão entre os mais importantes parceiros económicos do país. Desde 2001, a taxa média de crescimento económico anual do produto interno bruto (PIB) moçambicano tem sido uma das mais altas do mundo. No entanto, as taxas de PIB per capita, índice de desenvolvimento humano (IDH), desigualdade de renda e expectativa de vida de Moçambique ainda estão entre as piores do planeta, enquanto a Organização das Nações Unidas (ONU) considera Moçambique um dos países menos desenvolvidos do mundo.  A única língua oficial de Moçambique é o português, que é falado principalmente como segunda língua por cerca de metade da população. Entre as línguas nativas mais comuns estão o macua, o tsonga, ndau, chuabo e o sena. A população de cerca de 30 milhões de pessoas é composta predominantemente por povos bantus. A religião com o maior número de adeptos em Moçambique é o cristianismo (a denominação católica é a que reúne maior número de adeptos), mas há uma presença significativa de seguidores do islamismo. O país é membro da União Africana, da Commonwealth Britânica, da Comunidade dos Países de Língua Portuguesa (CPLP), da União Latina, da Organização da Conferência Islâmica, da Comunidade para o Desenvolvimento da África Austral e da Organização Internacional da Francofonia.";

/**
 * Generate a Random integer
 * @param {Number} max -the max value that can be generated
 *
 * @returns a number bigger than 0 and less than max
 */

function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
}

/**
 *The function Split the word in chars and set the class name "letter" in each character
 *
 * @param {string} word - the original word
 *
 * @returns the word with the class letter on each character
 */

function turnWordInArray(word) {
  var array = word.split(" ");

  return array;
}

function splitWordAndSetClass(word) {
  return (
    '<div class="word">' +
    '<span class="letter">' +
    word.split("").join('</span><span class="letter">') +
    "</span>" +
    "</div>"
  );
}

function actionKeyBackspace() {
  currentWord = document.querySelector(".word.current");
  currentLetter = currentWord.querySelector(".letter.current");
  if (currentLetter !== null) {
    goPreviousLetter();
  } else {
    currentLetter = currentWord.lastElementChild;
    // currentLetter.style.color = "#ffffff";
    currentLetter.classList.toggle("current");
    removeTypeOfLetter(currentLetter, "both");
    moveCursor();
  }
}

function actionSpace() {
  if (currentLetter === null) {
    goNextWord();
    moveCursor();
  } else {
    colorLetter(false);
    goNextLetter();
  }
}

function removeTypeOfLetter(letter, typeOfLetter) {
  switch (typeOfLetter) {
    case "incorrect":
      letter.classList.remove("incorrect");
      break;

    case "correct":
      letter.classList.remove("correct");
      break;

    case "both":
      letter.classList.remove("incorrect");
      letter.classList.remove("correct");
      break;
  }
}

function goNextWord() {
  currentWord = document.querySelector(".word.current");
  if (currentWord.nextSibling) {
    currentWord.nextSibling.classList.toggle("current");
    currentWord.classList.remove("current");
    letter = currentWord.nextSibling.querySelector(".letter");
    letter.classList.toggle("current");

    moveCursor();
  }
}

function goPreviousWord() {
  currentWord = document.querySelector(".word.current");
  currentLetter = currentWord.querySelector(".letter.current");
  previousWord = currentWord.previousSibling;

  if (previousWord !== null) {
    currentLetter.classList.remove("current");
    previousWord.classList.toggle("current");
    currentWord.classList.remove("current");
    letter = previousWord.lastElementChild;
    letterPositionLeft = letter.getBoundingClientRect().left;
    cursor.style.left = letterPositionLeft + 10 + "px";
  }
}

function goNextLetter() {
  if (currentLetter.nextSibling) {
    currentLetter.nextSibling.classList.toggle("current");
    currentLetter.classList.remove("current");
    moveCursor();
  } else {
    currentLetter.classList.remove("current");
    moveCursor();
  }
}

function goPreviousLetter() {
  if (currentLetter.previousSibling !== null) {
    currentLetter.previousSibling.classList.toggle("current");
    currentLetter.classList.remove("current");
    removeTypeOfLetter(currentLetter.previousSibling, "both");
    moveCursor();
  } else {
    goPreviousWord();
  }
}

function colorLetter() {
  if (key === expected) {
    currentLetter.classList.toggle("correct");
  } else {
    currentLetter.classList.toggle("incorrect");
  }
}

function moveCursor() {
  cursor = document.getElementById("cursor");
  currentLetter = document.querySelector(".letter.current");

  if (currentLetter) {
    letterPositionLeft = currentLetter.getBoundingClientRect().left;
    letterPositionTop = currentLetter.getBoundingClientRect().top;

    cursor.style.top = letterPositionTop + "px";
    cursor.style.left = letterPositionLeft + "px";
  } else {
    cursor.style.left = letterPositionLeft + 10 + "px";
  }
}

function keyEvents(event) {
  key = event.key;

  //const charcode = event.charCode || event.keyCode;
  //key = String.fromCharCode(charcode);
  currentLetter = document.querySelector(".letter.current");

  if (document.querySelector("#game.over")) {
    document.removeEventListener("keyup", function (event) {});
    return;
  }
  if (currentLetter !== null && currentLetter !== undefined) {
    expected = currentLetter?.innerText || " ";
  }

  isLetter = key.length === 1 && key !== " ";
  if (isLetter) {
    colorLetter();
    goNextLetter();
  }

  if (key === " ") {
    actionSpace();
  }

  timer();
  moveWordUP();

  console.log(key, expected);
}

function moveWordUP() {
  currentLetter = document.querySelector(".letter.current");
  if (
    currentLetter !== null &&
    currentLetter != undefined &&
    cursor.getBoundingClientRect().top > 178 //Change in the second line
  ) {
    words = document.querySelector("#words");
    wordMarginTop -= 80;
    words.style.marginTop = wordMarginTop + "px";
    moveCursor();
  }
}

function moveWordDown() {
  if (cursor.getBoundingClientRect().top < 136 && currentWord.previousSibling) {
    words = document.querySelector("#words");
    wordMarginTop += 80;
    words.style.marginTop = wordMarginTop + "px";
    moveCursor();
  }
}

function timer() {
  if (!isTimerStarted && isLetter) {
    isTimerStarted = true;

    gameTimer = setInterval(() => {
      if (!timeGameStarted) {
        timeGameStarted = new Date().getTime();
        secondsDefinedToPlay = minutesDefinedToPlay * 60;
      }
      currentTime = new Date().getTime();
      mileSecondsPassed = currentTime - timeGameStarted;
      secondsPassed = (mileSecondsPassed / 1000).toFixed(0);
      secondsLeftToPlay = secondsDefinedToPlay - secondsPassed;

      if (secondsLeftToPlay < 0) {
        gameOver();
      } else {
        timerInfo.innerHTML =
          Math.floor(secondsLeftToPlay / 60) + ":" + (secondsLeftToPlay % 60);
      }
    }, 1000);
  }
}
function setWords() {
  var arrayWords = turnWordInArray(textNationalAnthem);
  words = document.getElementById("words");
  words.innerHTML = "";
  for (var i = 0; i < arrayWords.length; i++) {
    words.innerHTML += splitWordAndSetClass(arrayWords[i]);
  }
}
function newGame() {
  cursor.style.display = "none";
  setWords();
  word = document.querySelector(".word");
  word.classList.toggle("current");
  letter = document.querySelector(".letter");
  letter.classList.toggle("current");
  cursor.style.display = "block";
  moveCursor();
}

function gameOver() {
  cursor.style.display = "none";
  timerInfo.innerHTML = getWpm() + "WPM";
  document.getElementById("game").classList.toggle("over");
  clearInterval(gameTimer);
}

function getWpm() {
  var arrayWord = [...document.querySelectorAll(".word")];
  var lastTypedWord = document.querySelector(".word.current");
  const indexOfLastWord = arrayWord.indexOf(lastTypedWord);
  var arrayTypedWords = arrayWord.slice(0, indexOfLastWord);

  var correctWords = arrayTypedWords.filter((word) => {
    const letters = [...word.children];
    var incorrectLetters = letters.filter((letter) =>
      letter.className.includes("incorrect")
    );

    var correctLetters = letters.filter((letter) =>
      letter.className.includes("correct")
    );
    return (
      incorrectLetters.length === 0 && correctLetters.length === letters.length
    );
  });
  return correctWords.length / minutesDefinedToPlay;
}

document.addEventListener("keypress", function (event) {
  keyEvents(event);
});

document.addEventListener("keyup", function (event) {
  var key = event.key;
  currentLetter = document.querySelector(".letter.current");
  if (key === "Backspace") {
    actionKeyBackspace();
  }

  if (currentLetter && currentLetter.previousSibling === null) {
    moveWordDown();
  }
});

buttonNewGame.addEventListener("click", function (event) {
  clearInterval(gameTimer);
  location.reload(); //Reload the page
});

newGame();
