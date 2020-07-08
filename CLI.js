#!/usr/bin/env node

const mdLinks = require('./main.js');
const chalk = require('chalk');

mdLinks(process.argv[2], process.argv[3])
  .then((obj) => {
    obj.forEach((el) => {
      if (process.argv[3] === '--validate') {
        let option = { validate: true }
        console.log(`${chalk.redBright.bold(el.text)} ${chalk.blueBright.bold(el.href)} ${chalk.yellow.bold(el.status)} ${chalk.green.bold(el.statusText)}`)
      } else {
        console.log(el.text, el.href)
      }
    })
  })
