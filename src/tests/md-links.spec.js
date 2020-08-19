const mdLinks = require('../lib/index');
const mock = require('./mock.js');


describe('mdLinks', () => {
  it('é uma function', () => {
    expect(typeof mdLinks).toBe('function')
  })

  it('deve retornar o diretorio', done => {
    mdLinks('./exemple').catch (link => {
      expect(link).toBe('Sorry, the file/directory could not be read');
      done()
    });
  });
  it('retorna links com validação', done => {
    mdLinks('./tests//mock.md', '--validate').then(link => {
      expect(link).toEqual(mock.resultValidate);
      done()
    });
  });
  it('deve retornar um array de objetos', done => {
    mdLinks('./tests//mock.md', '--validate').then((link) => {
      expect(link).toEqual(mock.resultValidate);
      done()
    });
  });
  it('erro', () => {
    mdLinks('./tests/mock.md')
      .catch((err) => {
        expect(err).toBe('Sorry, but there is no archive with that name in this directory');
    })
  })
})

