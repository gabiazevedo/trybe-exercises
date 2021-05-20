const getRepos = require('../testes-automatizados-com-jest_2/exercise4');

  it('Retorna lista de repositórios', () => {
    const url = 'https://api.github.com/orgs/tryber/repos';

    return getRepos(url).then(data => {
      expect(data).toContain('sd-01-week4-5-project-todo-list'),
      expect(data).toContain('sd-01-week4-5-project-meme-generator')
    });   
  });