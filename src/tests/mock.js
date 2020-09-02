const resultReaddir = [
  {
    text: '8. Checklist',
    href: '#8-checklist'
  },
  { 
    text: 'Markdown', 
    href: 'https://pt.wikipedia.org/wiki/Markdown' 
  },
  { 
    text: 'Jest', 
    href: 'https://jestjs.io/' 
  }
]

const resultValidate = [
  { 
    file: './src/tests/mock.md',
    text: '8. Checklist', 
    href: '#8-checklist', 
    status: '400',
    statusText: 'FAIL',
  },
  { 
    file: './src/tests/mock.md',
    text: 'Markdown', 
    href: 'https://pt.wikipedia.org/wiki/Markdown', 
    status: 200,
    statusText: 'OK'
  },
  { 
    file: './src/tests/mock.md',
    text: 'Jest', 
    href: 'https://jestjs.io/', 
    status: 200,
    statusText: 'OK'
  }
]

    const resultStats = [{
      brokenLinks: 1,
      stats: 5,
      uniqueLinks: 4,
    }
  ];

module.exports = { resultStats, resultReaddir, resultValidate };