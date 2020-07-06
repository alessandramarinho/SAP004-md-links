#!/usr/bin/env node

const mdLinks = require ('./index.js');
const chalk = require('chalk');
const 

mdLinks(process.argv[2])
.then((result)=>{
    result.forEach((el) => {
    console.log ('\n', `${chalk.redBright.bold(el.href)}, ${chalk.blueBright.bold(el.text.substring (0, 50))}`);
})
})
.catch(console.error);


