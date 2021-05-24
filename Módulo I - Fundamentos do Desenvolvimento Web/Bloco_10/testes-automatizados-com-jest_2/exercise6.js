const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise ((resolve, reject) => {
    const arrayNameAnimals = Animals.find((animalName) => animalName.name === name);
    if (arrayNameAnimals) {
      return resolve(arrayNameAnimals);
    }
    return reject('Nenhum animal com esse nome!');
  })
);

const getAnimal = (name) => {
 return findAnimalByName(name).then(nome => nome)
};

module.exports = getAnimal;