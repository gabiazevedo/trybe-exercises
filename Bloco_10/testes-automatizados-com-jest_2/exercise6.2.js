const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => (
  new Promise ((resolve, reject) => {
    const arrayAnimalsByAge = Animals.filter((animals) => animals.age === age);
      if (arrayAnimalsByAge.length !== 0) {
        return resolve(arrayAnimalsByAge);
      }
      return reject('Nenhum animal com essa idade!');
    })
  );


const getAnimal = (age) => {
  return findAnimalByAge(age).then(idade => idade)
};

module.exports = getAnimal;