const fs = require('fs');
const fetch = require('node-fetch')
const validUrl = require('valid-url')

const mdLinks = (file, option) => {
  const obj = [];
  let arrayLinks = [];
  return new Promise((resolve, rejects) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        rejects(err);
      }
      else {
        arrayLinks = data.match(/\[(.*?)\]\((.*?)\)/g);
        if (option.includes('--validate')) {
          arrayLinks.forEach(link => {
            const text = link.match(/(?<=\[).+?(?=\])/);
            const href = link.match(/(?<=\().+?(?=\))/)
            obj.push({
              text: text[0],
              href: href[0],
              file
            })
          })
          console.log(obj)


          }else {
            arrayLinks.forEach(link => {
              const text = link.match(/(?<=\[).+?(?=\])/g);
              const href = link.match(/(?<=\().+?(?=\))/g)
              obj.push({
                text,
                href,
                file
              })
            })
            console.log(obj)
          resolve(obj)
          }

    }})
    })
  }


module.exports = mdLinks
mdLinks(process.argv[2], process.argv)
// .then (res => console.log (res))



