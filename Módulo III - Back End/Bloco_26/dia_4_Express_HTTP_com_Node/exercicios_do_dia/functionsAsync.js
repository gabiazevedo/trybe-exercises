const fs = require('fs/promises');

function readSimpsons() {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then((simpsons) => JSON.parse(simpsons));
}

async function writeSimpsons(newSimpson) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpson));
}

module.exports = {
  readSimpsons, writeSimpsons
}