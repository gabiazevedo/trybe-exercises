const uppercase = require('../testes-automatizados-com-jest_2/exercise1')

test('Testa se string dada como parâmetro retorna em letras maiúsculas', done => {
  uppercase('gabriela', (result) => {
    expect(result).toEqual('GABRIELA');
    done();
  });
})