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

    (sumOfNewArray < 8000) ? resolve(sumOfNewArray) : reject(sumOfNewArray);
    })
    promise
  .then(sumOfNewArray => console.log([2, 3, 5, 10].map((newArray => sumOfNewArray / newArray))))
  .catch(sumOfNewArray => console.log(`${sumOfNewArray} É mais de oito mil! Essa promise deve estar quebrada!`))
    

   
  
  

    