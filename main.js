const fs = require('fs');
const readPath = require('./readdir.js');
const readFiles = require('./index.js');


const mdLinks = (file, option) => {
    return new Promise((resolved, rejected) => {
        fs.stat(file, (err, stats) => {
            if (err) rejected('Sorry, but there is no archive with that name in this directory');
            else if (stats.isDirectory()) {
                resolved(readPath(file, option));
            } else if (stats.isFile()) {
                resolved(readFiles(file, option));
            }
        });
    });
}
module.exports = mdLinks;