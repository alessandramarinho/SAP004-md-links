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
            const text = link.match(/(?<=\[).+?(?=\])/g);
            const href = link.match(/(?<=\().+?(?=\))/g)
            arrayLinks.forEach(link => {
              obj.push({
                text,
                href,
              })
            })
            Promise.all(
              obj.map(el =>{
                if (validUrl.isUri(el.href)) {
                  return fetch(el.href, { method: 'GET' })
                } else {
                  return { status: '400' }
                }
              })
            ).then(res => {
              res.forEach((res, el) => {
                obj[el].status = res.status
              })
              resolve(obj)
            })
          })
          }else {
            arrayLinks.forEach(link => {
              const text = link.match(/(?<=\[).+?(?=\])/g);
              const href = link.match(/(?<=\().+?(?=\))/g)
              obj.push({
                text,
                href
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



