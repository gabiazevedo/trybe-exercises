//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo(palavra) {
let palavraInvertida = '';

for (let index = 0; index < palavra.length; index +=1) {
    palavraInvertida = palavra[index] + palavraInvertida;
}
    if (palavraInvertida === palavra) {
        return true;
    } 
    
    else {
        return false;
    }
}
console.log(verificaPalindromo('pare'));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function maiorNum(lista) {
let contador = 0;
let max = 0;
for (let index = 0; index < lista.length; index += 1) {
 if (lista[index] > contador) {
     contador = lista[index];
     max = index;
 }
}
return max;
}
console.log(maiorNum([2, 3, 6, 7, 10, 1]));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

function menorNum(menorLista) {
    let contador = 0;
    let min = 0;
    for (let index = 0; index < menorLista.length; index +=1) {
        if (menorLista[index] < contador) {
            contador = menorLista[index];
            min = index;
        }
    }
    return min; 
}
console.log(menorNum([2, 4, 6, 7, 10, 0, -3]));

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

function listNames(arrayNames) {
    let maiorNome = '';
    
    for (let index = 0; index < arrayNames.length; index += 1) {
        if (arrayNames[index].length > maiorNome.length) {
            maiorNome = arrayNames[index];
        }
    }
    return maiorNome;
}
console.log(listNames(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Escafandro']));

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

function repeatNum(listNumber) {
  let soma = 0;
  let repeticao =0;
  let guardaRep = 0;

  for (let index1 = 0; index1 < listNumber.length; index1 +=1) {
      soma = 0;      
    for (let index2 = 0; index2 < listNumber.length; index2 += 1) {
        if (listNumber[index1] === listNumber[index2]) {
            soma += 1;
        }
    }
    if (soma > guardaRep) {
        guardaRep = soma;
        repeticao = listNumber[index1];
    }
  }
  return repeticao;
}
console.log(repeatNum([2, 3, 2, 5, 8, 3, 2]));

// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function sumNum(n) {
    let counter = 0;

    for (let index = 1; index <= n; index += 1) {
        counter += index;
    }
    return counter;
}
console.log(sumNum(5));

// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. 
// Considere que a string ending sempre será menor que a string word.
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false

function verificaPalavra(word, ending) {

    if (word.substring(word.length - 2) === ending) {
      return true;
  } else {
      return false;
  }
}
console.log(verificaPalavra('joaofernando', 'fernan'));

function filho(letras) {
    let hec = letras.substring(letras.length - 2); 
    return hec;
}
console.log(filho('heitor'));

