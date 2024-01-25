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
  minutesDefinedToPlay = null,
  secondsDefinedToPlay = null,
  secondsLeftToPlay = null;
timerInfo = document.getElementById("info");
var buttonNewGame = document.getElementById("buttonNewGame");
var buttonPlay = document.getElementById("buttonPlay");
var timeSelect = document.getElementById("timeSelect").value;
cursor.style.display = "none";

var textNationalAnthem =
  "Na memória de África e do mundo Pátria bela dos que ousaram lutar Moçambique, o teu nome é liberdade O sol de junho para sempre brilhará Moçambique, nossa terra gloriosa Pedra a pedra construindo um novo dia Milhões de braços, uma só força Oh, Pátria amada, vamos vencer Moçambique, nossa terra gloriosa Pedra a pedra construindo um novo dia Milhões de braços, uma só força Oh, Pátria amada, vamos vencer Povo unido do Rovuma ao Maputo Colhe os frutos do combate pela paz Cresce o sonho ondulando na bandeira E vai lavrando na certeza do amanhã Moçambique, nossa terra gloriosa Pedra a pedra construindo um novo dia Milhões de braços,uma só força Oh, Pátria amada, vamos vencer Moçambique, nossa terra gloriosa Pedra a pedra construindo um novo dia Milhões de braços, uma só força Oh, Pátria amada, vamos vencer";

var textMozambique =
  "Moçambique, oficialmente designado como República de Moçambique, é um país localizado no sudeste do continente Africano, banhado pelo oceano Índico a leste e que faz fronteira com a Tanzânia ao norte; Maláui e Zâmbia a noroeste; Zimbábue a oeste e Essuatíni e África do Sul a sudoeste. A capital e maior cidade do país é Maputo, anteriormente chamada de Lourenço Marques, durante o domínio português. Em 1994, o país realizou as suas primeiras eleições multipartidárias e manteve-se como uma república presidencial relativamente estável desde então.  Moçambique é dotado de ricos e extensos recursos naturais. A economia do país é baseada principalmente na agricultura, mas o sector industrial, principalmente na fabricação de alimentos, bebidas, produtos químicos, alumínio e petróleo, está crescendo. O sector de turismo do país também está em crescimento. A África do Sul é o principal parceiro comercial de Moçambique e a principal fonte de investimento directo estrangeiro. Portugal, Brasil, Espanha e Bélgica também estão entre os mais importantes parceiros económicos do país. Desde 2001, a taxa média de crescimento económico anual do produto interno bruto (PIB) moçambicano tem sido uma das mais altas do mundo. A única língua oficial de Moçambique é o português, que é falado principalmente como segunda língua por cerca de metade da população. Entre as línguas nativas mais comuns estão o macua, o tsonga, ndau, chuabo e o sena. A população de cerca de 30 milhões de pessoas é composta predominantemente por povos bantus.";

var textArchipelagoBazaruto =
  "O arquipélago de Bazaruto é um grupo de ilhas no Oceano Índico, localizadas ao longo da costa de Moçambique. As ilhas alongam-se de norte a sul por aproximadamente 55 km e estão a cerca de uma quinzena de quilómetros do continente africano. O arquipélago faz parte do distrito de Vilankulo, na província de Inhambane. Bazaruto alberga a última população de dugongos das costas africanas. Quatro espécies de tartarugas vivem no arquipélago. O macaco Cercopithecus mitis encontra-se nas ilhas. Existem ainda pequenos antílopes, flamingos, pelicanos, lontras, golfinhos, baleias, e crocodilos nos lagos das duas ilhas principais. Existem centenas de espécies de peixes, assim como cerca de 160 espécies de pássaros. O arquipélago encontra-se protegido no quadro de um parque nacional, o Parque Nacional do Bazaruto criado em 1971, que inclui os corais que envolvem as ilhas, tornando-o na única zona marinha protegida de Moçambique.";

var textNationalParkGorongosa =
  "O Parque Nacional da Gorongosa é uma área de conservação situada na zona limite sul do Grande Vale do Rift Africano, no coração da zona centro de Moçambique. O Parque, com um pouco mais de 4000 km quadrados, inclui o vale e parte dos planaltos circundantes. Os rios que nascem no vizinho Monte Gorongosa, que atinge os 1.863 metros de altura, irrigam a planície. Em 20 de Julho de 2010 o governo moçambicano decidiu alargar a área do parque para 4.067 km quadrados, bem como criar uma zona tampão de 3,30 km quadrados à sua volta. As cheias e inundações sazonais do vale, que é constituído por um mosaico de diferentes tipos de solo, criam uma diversidade de ecossistemas distintos. As pradarias são salpicadas por áreas de acácias, savana, floresta seca em zona de areias, lagunas enchidas sazonalmente pelas chuvas e moitas nos montículos erigidos pelas térmitas. Os planaltos contêm florestas de miombo e de montanha e uma espectacular floresta húmida no sopé de uma série de desfiladeiros calcários. Esta combinação de características únicas suportava outrora uma das mais densas populações de vida selvagem de toda a África, incluindo carnívoros carismáticos, herbívoros e cerca de 500 espécies de aves. Mas os números dos grandes mamíferos foram reduzidos em mais de 95% e os ecossistemas foram largamente afectados pelos cerca de trinta anos de guerra civil em Moçambique.";

var textMountKilimanjaro =
  "Monte Kilimanjaro é um vulcão adormecido localizado na região de Kilimanjaro, na Tanzânia. Possui três cones vulcânicos: Kibo, Mawenzi e Shira. É a montanha mais alta da África e a montanha independente mais alta acima do nível do mar do mundo: 5.895 m acima do nível do mar e cerca de 4.900 m acima da base do planalto. É o vulcão mais alto da África e do Hemisfério Oriental. Kilimanjaro é o quarto pico topograficamente mais proeminente da Terra. Faz parte do Parque Nacional Kilimanjaro e é um importante destino para caminhadas e escaladas. Devido ao encolhimento dos glaciares e dos campos de gelo, que se prevê que desapareçam entre 2025 e 2035, tem sido objecto de muitos estudos científicos. O interior vulcânico do Kilimanjaro é pouco conhecido porque não houve qualquer erosão significativa que expusesse os estratos ígneos que compõem a estrutura do vulcão. A atividade eruptiva no centro de Shira começou há cerca de 2,5 milhões de anos, com a última fase importante ocorrendo há cerca de 1,9 milhões de anos, pouco antes do colapso da parte norte do edifício. Shira é encimada por um amplo planalto a 3.800 m, que pode ser uma caldeira cheia. A borda remanescente da caldeira foi profundamente degradada pela erosão. Antes da formação da caldeira e do início da erosão, Shira poderia ter entre 4.900 e 5.200 m de altura. É maioritariamente composto por lavas básicas, com alguns piroclásticos. A formação da caldeira foi acompanhada por lava emanada de fraturas anulares, mas não houve atividade explosiva em grande escala. Dois cones formaram-se posteriormente, o fonolítico na extremidade noroeste da cordilheira e o dolerítico Platzkegel no centro da caldeira";

var arrayTexts = [
  textMozambique,
  textNationalAnthem,
  textArchipelagoBazaruto,
  textNationalParkGorongosa,
  textMountKilimanjaro,
];

var arrayUsedIndex = [],
  lengthUsedIndex = 0;

//import timeSelect from "./indexScript.js";
//alert(timeSelect);

/**
 * Generate a Random integer
 * @param {Number} max -the max value that can be generated
 *
 * @returns a number bigger than 0 and less than max
 */

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/**
 *The function Split the word in chars and set the class name "letter" in each character
 *
 * @param {string} word - the original word
 *
 * @returns the word with the class letter on each character
 */

function turnTextInArrayWords(texts) {
  var array = texts.split(" ");
  return array;
}

function splitWordAndSetClass(word) {
  return (
    '<span class="letter">' +
    word.split("").join('</span><span class="letter">') +
    "</span>"
  );
}

function setWords() {
  const indexText = verifyTextRepetion();
  var arrayWords = turnTextInArrayWords(arrayTexts[indexText]);
  words = document.getElementById("words");

  for (var i = 0; i < arrayWords.length; i++) {
    var auxiliarWord = document.createElement("div");
    auxiliarWord.className = "word";
    auxiliarWord.innerHTML += splitWordAndSetClass(arrayWords[i]);
    words.appendChild(auxiliarWord);
  }
}

function verifyTextRepetion() {
  var value = true;
  var indexText = null;
  do {
    indexText = getRandomInt(arrayTexts.length);
    if (!arrayUsedIndex.includes(indexText)) {
      arrayUsedIndex[lengthUsedIndex] = indexText;

      lengthUsedIndex++;
      value = false;
    }
  } while (value && arrayTexts.length > arrayUsedIndex.length);

  if (arrayTexts.length === arrayUsedIndex.length) {
    arrayUsedIndex = [];
  }
  return indexText;
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
  addNewText();
}

function addNewText() {
  var gameOver = document.querySelector("#game.over");
  var nextWord = currentWord.nextSibling;
  if (nextWord.nextSibling === null && gameOver === null) {
    setWords();
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
    letterPositionLeft =
      currentWord.lastElementChild.getBoundingClientRect().left;

    cursor.style.left = letterPositionLeft + pixelToMoveCursor() + "px";
  }
}

function pixelToMoveCursor() {
  if (window.innerWidth >= 1024) {
    return 15;
  } else {
    if (window.innerWidth >= 768) {
      return 12;
    } else {
      return 10;
    }
  }
}

function stopKeyListener() {
  if (document.querySelector("#game.over")) {
    document.removeEventListener("keyup", function (event) {});
    return;
  }
}
function keyEvents(event) {
  key = event.key;
  currentLetter = document.querySelector(".letter.current");
  currentWord = document.querySelector(".word.current");

  stopKeyListener();

  if (currentLetter !== null && currentLetter !== undefined) {
    expected = currentLetter.innerText;

    isLetter = key.length === 1 && key !== " ";
    if (isLetter) {
      colorLetter();
      goNextLetter();
    }
  }

  console.log(key, expected);
}
function actionKeyBackspace() {
  currentWord = document.querySelector(".word.current");
  currentLetter = currentWord.querySelector(".letter.current");
  if (currentLetter !== null) {
    goPreviousLetter();
  } else {
    currentLetter = currentWord.lastElementChild;
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

function moveWordUP() {
  if (
    currentWord.nextSibling &&
    currentWord.nextSibling.getBoundingClientRect().top >= 170 &&
    currentLetter === null
  ) {
    words = document.querySelector("#words");
    wordMarginTop -= pixelToMoveWord();
    words.style.marginTop = wordMarginTop + "px";
  }
}

function moveWordDown() {
  if (
    currentLetter &&
    currentWord.previousSibling &&
    currentWord.previousSibling.getBoundingClientRect().top <= 90 &&
    currentLetter.previousSibling === null
  ) {
    words = document.querySelector("#words");
    wordMarginTop += pixelToMoveWord;
    words.style.marginTop = wordMarginTop + "px";
  }
}

function pixelToMoveWord() {
  if (window.innerWidth >= 1024) {
    return 44;
  } else {
    if (window.innerWidth >= 768) {
      return 41;
    } else {
      return 40;
    }
  }
}
function timer() {
  if (!isTimerStarted) {
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

function newGame() {
  var timeSelect = document.getElementById("timeSelect").value;
  minutesDefinedToPlay = Number(timeSelect); //Takes the time selected on the list

  //word configuration
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
  timerInfo.style.display = "none";
  document.getElementById("hourGlass").style.display = "none";
  document.getElementById("game").classList.toggle("over");
  clearInterval(gameTimer);
  showModal();
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
  currentWord = document.querySelector(".word.current");
  stopKeyListener();

  if (key === "Backspace") {
    moveWordDown();
    actionKeyBackspace();
  }

  if (key === " ") {
    moveWordUP();
    actionSpace();
  }
});

buttonNewGame.addEventListener("click", function (event) {
  clearInterval(gameTimer);
  window.location.reload(); //Reload the page
});

buttonPlay.addEventListener("click", function (event) {
  hideElements();
  showHidenElements();
  newGame();
  timer();
});

function hideElements() {
  var containerSelect = document.getElementById("containerSelect");
  containerSelect.style.display = "none";
  var buttonPlay = document.getElementById("buttonPlay");
  buttonPlay.style.display = "none";
  var paragraph = document.getElementById("paragraph");
  paragraph.style.display = "none";
}

function showHidenElements() {
  var containerTimer = document.getElementById("containerTimer");
  containerTimer.style.display = "flex";
  var buttonNewGame = document.getElementById("buttonNewGame");
  buttonNewGame.style.display = "block";
}

//Modal

/*show modal */
function showModal() {
  var modal1 = document.getElementById("modal1");
  setMessageOnModal();
  modal1.showModal();
}

function setMessageOnModal() {
  var span = document.getElementById("alertMessage");
  span.innerHTML = "Your speed is " + getWpm() + " WPM";
}

/*Close modal */
function closeModal(id) {
  const modal = document.getElementById(id);
  modal.close();
}
