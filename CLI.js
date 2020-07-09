#!/usr/bin/env node

const mdLinks = require('./main.js');
const chalk = require('chalk');
const args = process.argv.slice(2)

mdLinks(process.argv[2], process.argv[3])
  .then((obj) => {
      if (process.argv[3] === '--validate'){
        obj.forEach (i =>{
          console.log(`${chalk.redBright.bold('text:')}, ${chalk.blueBright.bold(i.text)},  ${chalk.cyan.bold('href:')},  ${chalk.yellow.bold(i.href)},  ${chalk.magenta.bold('status:')}, ${chalk.green.bold((i.status), (i.statusText).toString())}`)
          })
      } else if (args[1]) {
        console.log(`${chalk.redBright.bold("Command not found. Did you mean '--validate'?")}`)
      } else {
        obj.forEach(i => {
          console.log(`${chalk.blueBright.bold('text:', i.text)}, ${chalk.yellow.bold('href:', i.href)}`)
        })
      }
    })
    .catch(err => console.log(err))


