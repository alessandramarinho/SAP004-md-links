#!/usr/bin/env node

const mdLinks = require('./src/lib/mdLinks');
const chalk = require('chalk');

mdLinks(process.argv[2], process.argv[3])
  .then((obj) => {
    if (process.argv.includes('--stats')) {
      const stats = obj.map(el => el.href)
      const uniqueLinks = new Set(stats)
      const brokenLinks = obj.filter(el => el.status >= 400 && el.status < 500)
      console.log(chalk.yellow.bold(`Total Links: ${stats.length}`));
      console.log(chalk.green.bold(`Unique Links: ${uniqueLinks.size}`));
      console.log(chalk.red.bold(`Total Broken links: ${brokenLinks.length}`));
      return;
    }
    if (process.argv[3] !== "--validate" && process.argv[3] !== "--stats" && process.argv[3]) {
      console.log(`${chalk.redBright.bold("Command not found. Did you mean '--validate'? or '--stats'?")}`)
      return;
    }
    obj.forEach(i => {
      if (process.argv[3] === '--validate') {
        console.log(`${chalk.redBright.bold(i.file)}, ${chalk.redBright.bold('text:')}, ${chalk.blueBright.bold(i.text)},  ${chalk.cyan.bold('href:')},  ${chalk.yellow.bold(i.href)},  ${chalk.magenta.bold('status:')}, ${chalk.green.bold((i.status), (i.statusText).toString())}`)
      } else {
        console.log(`${chalk.redBright.bold(i.file)}, ${chalk.blueBright.bold('text:', i.text)}, ${chalk.yellow.bold('href:', i.href)}`)
      }
    })
  })
  .catch(err => console.log(err))


