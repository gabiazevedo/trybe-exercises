const { TestScheduler } = require('@jest/core');
const getUserName = require('../testes-automatizados-com-jest_2/exercise2-3');

//Teste usando promise

describe('Verifica usuários e sua existência', () => {
  it('Retorna usuário dono do ID 4', () => {
    expect.assertions(1);
    return getUserName(4).then(userName => 
      expect(userName).toEqual('Mark'));
  });

  it('Retorna error para usuário inexistente', () => {
    expect.assertions(1);
    return getUserName(3).catch(erro => 
      expect(erro).toEqual({ error: 'User with 3 not found.' }))
  });
});

//Teste usando async/await

describe('Verifica usuários e sua existência usando async/await', () => {
  test('Retorna usuário dono do ID 4', async(done) => {
    const userName = await getUserName(4);
    expect(userName).toEqual('Mark');
    done();
  });

  test('Retorna error para usuário inexistente', async(done) => {
    try {
      await getUserName(2);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 2 not found.' });
      done();
    }
  });
});