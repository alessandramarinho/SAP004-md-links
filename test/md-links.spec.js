const mdLinks = require('../index.js');

const result = [
  {
    text: '8. Guias, dicas e leituras complementares',
    href: '#8-guias-dicas-e-leituras-complementares'
  },
  { 
    text: 'Markdown', 
    href: 'https://pt.wikipedia.org/wiki/Markdown' 
  },
  { 
    text: 'GitHub', 
    href: 'https://github.com/' 
  }
]

const result2 = [
  { 
    text: '8. Guias, dicas e leituras complementares', 
    href: '#8-guias-dicas-e-leituras-complementares', 
    status: '400',
    file: './test/mock.md',
    statusText: 'FAIL'
  },
  { 
    text: 'Markdown', 
    href: 'https://pt.wikipedia.org/wiki/Markdown', 
    status: 200,
    file: './test/mock.md',
    statusText: 'OK'
  },
  { 
    text: 'Jest', 
    href: 'https://jestjs.io/', 
    status: 200,
    file: './test/mock.md',
    statusText: 'OK'
  }
]

describe('mdLinks', () => {
  it('é uma function', () => {
    expect(typeof mdLinks).toBe('function')
  })

  it('retorna 3 links com status', done => {
    mdLinks('./test/mock.md', '--validate').then(link => {
      console.log(link)
      expect(link).toEqual(result2)
      done()
    })
  })
  it('retornar 3 links', done => {
    mdLinks('./test/mock.md').then(link => {
      expect(link).toEqual(result2)
      done()
    })
  })

  it('retornar erro', done => {
    mdLinks('./test/mock.md').catch(link => {
      expect(link).toEqual(link)
      done()
    })
  })
})



//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });
