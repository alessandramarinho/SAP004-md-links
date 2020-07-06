const fs = require('fs')
const path = require('path');

const getDirectories = () => {
	return new Promise ((resolve, reject) => {
		fs.readdir(rootDirectory, (err, file) => {
			if (err)
				throw err;
			else {
				console.log ("\Arquivos com a extensão .md: ");
				file.map(file => { 
					if (path.extname(file) == ".md")
						console.log(file)
          }
        )
        // resolve(file)
      }
    })
  })
}

getDirectories(process.argv[2])
