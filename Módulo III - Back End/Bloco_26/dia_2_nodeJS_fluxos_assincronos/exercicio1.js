function verifyNumbers(num1, num2, num3) {

  const promise = new Promise((resolve, reject) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number')
    reject('Informe apenas números');

      const resultado = (num1 + num2) * num3;
      resolve(resultado);
    
    if(resultado < 50) reject('Valor muito baixo');

    resolve(resultado);
    
  });
  return promise;
}

verifyNumbers(10, 10, 10)
.then(resolve => console.log(`sucesso: ${resolve}`))
.catch(err => console.log(`erro: ${err.message}`));
