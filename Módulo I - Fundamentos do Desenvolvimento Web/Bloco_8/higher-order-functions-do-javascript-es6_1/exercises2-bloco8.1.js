const createEmployee = (fullName) => {
   
  const email = fullName.toLowerCase().split(' ').join('_');
  return {fullName, Email: `${email}@trybe.com`}
}

const newEmployees = (callback) => {
    const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
    }
    return employees;
    
  };
  console.log(newEmployees(createEmployee));

  // Desenvolva uma HOF que retorna o resultado de um sorteio. 
  // Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma 
  // função que checa se o número apostado é igual ao número sorteado. 
  // O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

// 1. Criar uma HOF que tem como parâmetro um número de 1 à 5;
// 2. Criar uma função de primeira classe que verifica se o número apostado é igual ao número de saída da HOF;
// 3. Criar uma estrutura condicional para comparar os dois números (o apostado e o parâmetro); 

// Primeiro exercício HOF feito em dupla com a Ana Giorgiani sem ajuda do gabarito!!!! Nós duas fizemos juntas e deu certo!!!

const gumble = (number, ramdomNum1) => {
  console.log((number === ramdomNum1) ? 'Parabéns você ganhou!!!' : 'Tente novamente');
}

const result = (number, callback) => { 
  let ramdomNum1 = Math.floor(Math.random() * (5 + 1));
  callback(number, ramdomNum1);
  return ramdomNum1;
}
console.log(result(3, gumble));


