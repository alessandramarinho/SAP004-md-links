const fs = require ('fs');

function mdLinks (file) {
return new Promise ((resolve, rejects) => {
  fs.readFile(file,'utf8', (err, data) => {
    if (err) {
      rejects (err.message);
    } else {
      const regexMdlinks = /([^[]+)\](\([^)]*)/gm 
      // \[(\S.*)\](\([^)]*)
      const array = data.match(regexMdlinks)
      const result = array.map((el) => {
        const cutText = el.split('](');
        const text = cutText[0].replace ('\n','');
        const href = cutText[1];
        return { text, href, file }
      });
      resolve(result)
    }
  });
});
}


// mdLinks(process.argv[2])
 module.exports = mdLinks

