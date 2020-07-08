#!/usr/bin/env node

const mdLinks = require('./index.js');
// const chalk = require('chalk');

mdLinks(process.argv[2], process.argv[3])
  .then((obj) => {
    obj.forEach((el) => {
      if (process.argv[3] === '--validate') {
        let option = { validate: true }
        console.log(el.text, el.href, el.status)
      } else {
        console.log(el.text, el.href)
      }
    })
  })

// .catch((err) => {
//     (console.log(err.message))
// }

// console.log(process.argv[2])

// .then((result)=>{
//     result.forEach((el) => {
//     console.log ('\n', `${chalk.redBright.bold(el.href)}, ${chalk.blueBright.bold(el.text.substring (0, 50))}`);
// })
// })
// .catch(console.error);
// console.log (process.argv[3])
