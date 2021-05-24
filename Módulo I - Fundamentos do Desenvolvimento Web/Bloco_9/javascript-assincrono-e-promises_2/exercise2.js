const promise = new Promise((resolve, reject) => {
  function getRandom() {
    return Math.floor(Math.random() * 50) + 1;
    }
    let array = [];
    for (let index = 0 ; index < 10 ; index += 1) {
    array.push(getRandom());
    }
    const newArray = array.map((value) => value ** 2 );
    const sumOfNewArray = newArray.reduce((acc, curr) => acc + curr);

    if (sumOfNewArray < 8000) {
      return resolve(sumOfNewArray);
    }
      reject(sumOfNewArray);
  })
  .then(sumOfNewArray => console.log(`Que sucesso =) Nosso número foi ${sumOfNewArray}`))
  .catch(sumOfNewArray => console.log(`Que fracasso =( Nosso número foi ${sumOfNewArray}`));
    