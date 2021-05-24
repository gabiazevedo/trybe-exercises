//Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, 
//e veja se compreendeu bem o funcionamento do beforeEach e do afterEach .

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

//Após escrever o que imagina que será o resultado, execute os testes e veja se acertou.

// 1 - Imprime no console: '1 - beforeEach';
// 2 - Imprime no console: ''1 - test';
// 3 - Imprime no console: '1 - afterEach;
// 4 - Imprime no console: '1 - beforeEach';
// 5 - Imprime no console: '2 - beforeEach';
// 6 - Imprime no console: '2 - test';
// 7 - Imprime no console: '2 - afterEach';
// 8 - Imprime no console: '1 - afterEach';