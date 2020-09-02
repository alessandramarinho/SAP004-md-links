const mdLinks = require('../lib/mdLinks');
const mock = require('./mock.js');


describe('mdLinks', () => {
  it('it a function', () => {
    expect(typeof mdLinks).toBe('function')
  })

  it('returns 3 links with validate', () => {
      return mdLinks('./src/tests/mock.md', '--validate').then(link => {
      expect(link).toMatchObject(mock.resultValidate)
    })
  })

  it('return an array of objects', () => {
    return mdLinks('./src/tests/mock.md').then(link => {
      expect(link).toMatchObject(mock.resultReaddir)
    })
  })

  it('return an array em diretorio', () => {
    return mdLinks('./src/tests').then(link => {
      expect(link).toMatchObject(mock.resultReaddir)
    })
  })

  it('erro', () => {
    mdLinks('./tests/mock.md')
      .catch((err) => {
        expect(err).toBe('Sorry, but there is no archive with that name in this directory');
    })
  })
})


