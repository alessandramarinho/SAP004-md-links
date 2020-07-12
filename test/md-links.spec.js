const mdLinks = require('../index.js');
const mock = require('./mock.js');


describe('mdLinks', () => {
  it('é uma function', () => {
    expect(typeof mdLinks).toBe('function')
  })

  it('deve retornar a validação', done => {
    mdLinks('./test/', '--validate').then (link => {
      expect(link).toEqual(mock.resultValidate);
      done()
    });
  });
  it('retorna links com validação', done => {
    mdLinks('./test//mock.md', '--validate').then(link => {
      expect(link).toEqual(mock.resultValidate);
      done()
    });
  });
  it('deve retornar um array de objetos', done => {
    mdLinks('./test//test.md').then((link) => {
      expect(link).toEqual(mock.resultArray);
      done()
    });
  });
  it('erro', () => {
    mdLinks('./test/mock.md')
      .catch((err) => {
        expect(err).toBe('Sorry, but there is no archive with that name in this directory');
    })
  })
})

// it('retorna 3 links com status', done => {
  //   mdLinks('./test/mock.md', '--validate').then(link => {
  //     console.log(link)
  //     expect(link).toEqual(resultValidate)
  //     done()
  //   })
  // })


