const exercise1 = require('../testes-automatizados-com-jest.3/exercise1');
jest.mock('../testes-automatizados-com-jest.3/exercise1');

// Utilizando o mock, defina o retorno padrão como 10. 
// Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

test('Testa número aleatório', () => {

  exercise1.randomNum = jest.fn().mockReturnValue(10);
  exercise1.randomNum();

  expect(exercise1.randomNum).toHaveBeenCalled();
  expect(exercise1.randomNum()).toBe(10);
  expect(exercise1.randomNum).toHaveBeenCalledTimes(2);

  exercise1.randomNum.mockImplementationOnce((a, b) => a / b);
  expect(exercise1.randomNum(10, 2)).toBe(5);
  expect(exercise1.randomNum).toHaveBeenCalledTimes(3);

  exercise1.randomNum.mockImplementation((a, b, c) => a * b * c);
  expect(exercise1.randomNum(10, 2, 5)).toBe(100);
  expect(exercise1.randomNum).toHaveBeenCalledTimes(4);

  exercise1.randomNum.mockReset();
  exercise1.randomNum();
  exercise1.randomNum.mockImplementation((a) => a + a);
  expect(exercise1.randomNum(10)).toBe(20);
  expect(exercise1.randomNum).toHaveBeenCalledTimes(2);
});