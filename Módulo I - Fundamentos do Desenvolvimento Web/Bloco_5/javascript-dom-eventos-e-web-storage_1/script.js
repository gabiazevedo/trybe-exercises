//Recupere o elemento que contém o título da página e faça algo com ele, 
//como alterá-lo para o nome do seu filme favorito.
//Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
//Por fim, recupere o subtítulo e altere-o também.


var title = document.getElementById("page-title").innerText = "Harry Potter e as Relíquias da Morte";

var secondParagraph = document.getElementById("second-paragraph").innerText = "A busca de Harry Potter pelas horcruxes, que se forem destruídas darão fim ao Lord das Trevas!";

var subTitle = document.getElementById("subtitle").innerText = "O fim da saga se aproxima!";

console.log(document.getElementById("subtitle").innerText)

//Adicione ao seu HTML uma classe com alguns estilos para os seus dois parágrafos.
//Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
//Altere algum estilo do primeiro deles.
//Recupere o subtítulo pela tag.

var paragraphs = document.getElementsByClassName("paragraphs");

for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[0].style = "color: magenta";
}

console.log(document.getElementsByClassName("paragraphs"));

console.log(document.getElementsByTagName("h4"));