// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.


function retornaArray() {
  let oddsAndEvens = [13, 3, 4, 10, 7, 2];

  for (let index = 0; index < oddsAndEvens.length; index += 1) {
    for (let index2 = 0; index2 < oddsAndEvens.length; index2 += 1) {
      if (oddsAndEvens[index] < oddsAndEvens[index2]) {
        let position = oddsAndEvens[index];
        oddsAndEvens[index] = oddsAndEvens[index2];
        oddsAndEvens[index2] = position;
      }
    }
  }
  console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescrente`);
}
retornaArray();

// Função com sort 

function sortedNumbers() {
  let oddsAndEvens = [13, 3, 4, 10, 7, 2];
  oddsAndEvens.sort((a, b) => a - b);
  console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescrente`);
}
sortedNumbers();


