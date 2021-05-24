const math = require('../testes-automatizados-com-jest.3/paraFixar');
jest.mock('../testes-automatizados-com-jest.3/paraFixar');

// 1 - Faça o mock da funcão subtrair e teste sua chamada.

test('#subtrair', () => {

  math.subtrair.mockImplementation((a, b) => a - b);
  math.subtrair(5, 3);

  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair).toHaveBeenCalledTimes(1);
  expect(math.subtrair).toHaveBeenCalledWith(5, 3);
  expect(math.subtrair(5, 3)).toBe(2);
});

// 2 - Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. 
// Teste a chamada e o retorno.

test('#multiplicar', () => {

  math.multiplicar.mockImplementation((a, b) => a * b);
  math.multiplicar(5, 2);

  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar).toHaveBeenCalledTimes(1);
  expect(math.multiplicar).toHaveBeenCalledWith(5, 2);
  expect(math.multiplicar(5, 2)).toBe(10);
});

// 3 - Faça o mock da função somar e implemente uma função que recebe dois valores e 
// retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.

test('#somar', () => {

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(49, 23);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(49, 23);
  expect(math.somar(49, 23)).toBe(72);
});
// 4 - Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. 
// Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. 
// Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.

test('#dividir', () => {

  math.dividir.mockImplementation((a, b) => a / b);
  math.dividir(45, 3);

  expect(math.dividir).toHaveBeenCalled();
  expect(math.dividir).toHaveBeenCalledTimes(1);
  expect(math.dividir).toHaveBeenCalledWith(45, 3);
  expect(math.dividir(45, 3)).toBe(15);

  math.dividir.mockClear();

  expect(math.dividir(2, 5)).toBe(0.4);
  expect(math.dividir).toHaveBeenCalled();
  expect(math.dividir).toHaveBeenCalledWith(2, 5);
});

// 5 - Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação 
// Restaure a implementação original da função e teste sua execução.

test('#subtrair', () => {

  expect(math.subtrair(45, 20)).toBe(25);

  const mockMultiplicar = jest
  .spyOn(math, 'subtrair')
  .mockImplementation((a, b) => a * b);

  math.subtrair(20, 2);
  expect(mockMultiplicar).toHaveBeenCalledTimes(4);
  expect(mockMultiplicar(20, 2)).toBe(40);
  expect(mockMultiplicar).toHaveBeenCalledTimes(5);
  expect(mockMultiplicar).toHaveBeenCalledWith(20, 2);

  math.subtrair.mockRestore();
  expect(math.subtrair(45, 20)).toBe(25);
})
