const fs = require('fs');
const validUrl = require('valid-url')
const fetch = require('node-fetch')

const readFiles = (file, option) => {
  let obj = []
  let arrayLinks = []
  option = { validate: true }

  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        err = 'Sorry, the file/directory could not be read'
        reject(err)
      } else {
        arrayLinks = data.match(/\[(.*?)\]\((.*?)\)/g)
        if (option) {
          arrayLinks.forEach(link => {
            obj.push({
              text: `${link.match(/(?<=\[).+?(?=\])/g)}`,
              href: `${link.match(/(?<=\().+?(?=\))/g)}`,
              file
            })
          })
          Promise.all(
            obj.map(el => {
              if (validUrl.isUri(el.href)) {
                return fetch(el.href, { method: 'GET' })
              } else {
                return {
                  status: '400',
                  statusText: 'FAIL'
                }
              }
            })
          ).then(res => {
            res.forEach((res, i) => {
              obj[i].status = res.status
              obj[i].statusText = res.statusText
            })
            resolve(obj)
          })
        } else {
          arrayLinks.forEach(link => {
            obj.push({
              text: `${link.match(/(?<=\[).+?(?=\])/g)}`,
              href: `${link.match(/(?<=\().+?(?=\))/g)}`,
            })
          })
          resolve(obj)
        }
      }
    })
  })
}

module.exports = readFiles