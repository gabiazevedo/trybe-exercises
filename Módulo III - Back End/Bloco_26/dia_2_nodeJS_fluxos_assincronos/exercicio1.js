function verifyNumbers(a, b, c) {

  const promise = new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      reject('Informe apenas números');

      const resultado = (a + b) * c;
    
    if(resultado < 50) {
      reject('Valor muito baixo');
    } else {
      resolve(resultado);
    };
  });
  return promise;
}

verifyNumbers(10, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error));

verifyNumbers(10, 'a', 20)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error));

verifyNumbers(1, 1, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error));

const createRandomNumbers = () => randomNumbers = Math.floor(Math.random() * 100 + 1);

const parans = Array.from({ length: 3 }).map(createRandomNumbers);

verifyNumbers(...parans)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));
