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

// a função abaixo não funciona, não sei porque!!! 01/10/21 

const createRandomNumbers = async () => {
  const randomNumbers = Math.floor(Math.random() * 100 + 1);
  const parans = Array.from({ length: 3 }).map(randomNumbers);
  
  try {
    const returnPromise = await verifyNumbers(...parans);
    console.log(returnPromise);
  } catch(error) {
    console.error(err);
  }
};
