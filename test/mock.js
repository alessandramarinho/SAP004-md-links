const resultValidate = [
  {
    "text": '8. Guias, dicas e leituras complementares',
    "href": '#8-guias-dicas-e-leituras-complementares',
    "status": '400',
    "file": './test//mock.md',
    "statusText": 'FAIL'
  },
  {
    "text": 'Markdown',
    "href": 'https://pt.wikipedia.org/wiki/Markdown',
    "status": 200,
    "file": './test//mock.md',
    "statusText": 'OK'
  },
  {
    "text": 'Jest',
    "href": 'https://jestjs.io/',
    "status": 200,
    "file": './test//mock.md',
    "statusText": 'OK'
  },
  {
    "file": "./test//mock.md",
    "href": "https://github.com/",
    "status": 200,
    "statusText": "OK",
    "text": "GitHub",
    },
    {
    "file": "./test//mock.md",
    "href": "https://www.google.com/",
    "status": 200,
    "statusText": "OK",
    "text": "Google",
    },
  ];
    const resultStats = [
      {
      brokenLinks: 1,
      stats: 5,
      uniqueLinks: 5,
    }
  ];

module.exports = { resultStats, resultValidate };