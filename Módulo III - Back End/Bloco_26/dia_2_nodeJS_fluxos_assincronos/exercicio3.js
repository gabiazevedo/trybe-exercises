async function verifyNumbers(a, b, c) {

  const resultado = await (a + b) * c;
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      throw new Error('Informe apenas números');
    
    if(resultado < 50) {
      throw new Error('Valor muito baixo');
    } else {
      return(resultado);
    };
  };

function numRandom() {
  const createRandomNumbers = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
   let array = [];

  for(let index = 0; index < 3; index += 1) {
    array.push(createRandomNumbers(1, 100));
  };
  return array;
}

verifyNumbers(...numRandom())
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));
