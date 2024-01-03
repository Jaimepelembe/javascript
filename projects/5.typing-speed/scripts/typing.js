var textNationalAnthem =
  "Na memória de África e do mundo Pátria bela dos que ousaram lutar Moçambique, o teu nome é liberdade O sol de junho para sempre brilhará Moçambique, nossa terra gloriosa Pedra a pedra construindo um novo dia Milhões de braços, uma só força Oh, Pátria amada, vamos vencer Moçambique, nossa terra gloriosa Pedra a pedra construindo um novo dia Milhões de braços, uma só força Oh, Pátria amada,  amos vencer Povo unido do Rovuma ao Maputo Colhe os frutos do combate pela paz Cresce o sonho ondulando na bandeira E vai lavrando na certeza do amanhã Moçambique, nossa terra gloriosa Pedra a pedra construindo um novo dia Milhões de braços,uma só força Oh, Pátria amada, vamos vencer Moçambique, nossa terra gloriosa Pedra a pedra construindo um novo dia Milhões de braços, uma só força Oh, Pátria amada, vamos vencer";

//textNationalAnthem = textNationalAnthem.split(" ");
const wordsCountNationalAnthem = textNationalAnthem.length;

var textMozambique =
  "Moçambique, oficialmente designado como República de Moçambique, é um país localizado no sudeste do continente Africano, banhado pelo oceano Índico a leste e que faz fronteira com a Tanzânia ao norte; Maláui e Zâmbia a noroeste; Zimbábue a oeste e Essuatíni e África do Sul a sudoeste. A capital e maior cidade do país é Maputo, anteriormente chamada de Lourenço Marques, durante o domínio português. Entre o primeiro e o século V, povos bantus migraram de regiões do norte e oeste para essa região. Portos comerciais suaílis e, mais tarde, árabes, existiram no litoral moçambicano até a chegada dos europeus. A área foi reconhecida por Vasco da Gama em 1498 e em 1505 foi anexada pelo Império Português. Depois de mais de quatro séculos de domínio português, Moçambique tornou-se independente em 25 de Junho de 1975, transformando-se na República Popular de Moçambique pouco tempo depois. Após apenas dois anos de independência, o país mergulhou em uma guerra civil intensa e prolongada que durou de 1977 a 1992. Em 1994, o país realizou as suas primeiras eleições multipartidárias e manteve-se como uma república presidencial relativamente estável desde então.  Moçambique é dotado de ricos e extensos recursos naturais. A economia do país é baseada principalmente na agricultura, mas o sector industrial, principalmente na fabricação de alimentos, bebidas, produtos químicos, alumínio e petróleo, está crescendo. O sector de turismo do país também está em crescimento. A África do Sul é o principal parceiro comercial de Moçambique e a principal fonte de investimento directo estrangeiro. Portugal, Brasil, Espanha e Bélgica também estão entre os mais importantes parceiros económicos do país. Desde 2001, a taxa média de crescimento económico anual do produto interno bruto (PIB) moçambicano tem sido uma das mais altas do mundo. No entanto, as taxas de PIB per capita, índice de desenvolvimento humano (IDH), desigualdade de renda e expectativa de vida de Moçambique ainda estão entre as piores do planeta, enquanto a Organização das Nações Unidas (ONU) considera Moçambique um dos países menos desenvolvidos do mundo.  A única língua oficial de Moçambique é o português, que é falado principalmente como segunda língua por cerca de metade da população. Entre as línguas nativas mais comuns estão o macua, o tsonga, ndau, chuabo e o sena. A população de cerca de 30 milhões de pessoas é composta predominantemente por povos bantus. A religião com o maior número de adeptos em Moçambique é o cristianismo (a denominação católica é a que reúne maior número de adeptos), mas há uma presença significativa de seguidores do islamismo. O país é membro da União Africana, da Commonwealth Britânica, da Comunidade dos Países de Língua Portuguesa (CPLP), da União Latina, da Organização da Conferência Islâmica, da Comunidade para o Desenvolvimento da África Austral e da Organização Internacional da Francofonia.";

textMozambique.split(" ");

//Generator function
function getRandomInt(max) {
  return Math.ceil(Math.random() * max); //Return a number bigger than 0 and less than max
}

function randomWord(wordLength) {
  return textNationalAnthem[getRandomInt(wordLength)];
}

function newGame() {
  //document.getElementById("textNationalAnthem").innerHTML = " ";
  for (let i = 0; i < 200; i++) {
    document.getElementById("words").innerHTML += splitWord(textNationalAnthem);
  }

  //document.getElementById("words").innerHTML = textNationalAnthem;
}

newGame();

document.addEventListener("keydown", function (event) {
  verifyKey(event);
});

function verifyKey(keyEvent) {
  if (keyEvent.key === textNationalAnthem[0]) {
    window.alert("Ola mundo");
   // textNationalAnthem[0].style.color = "red";
    ;
  }
}

function splitWord(word) {
  return '<div class="word">'+ word.split("").join(",")+'</div>';
}
