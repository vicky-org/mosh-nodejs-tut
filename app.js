
const fs = require('fs')

const files = fs.readdirSync('./')
console.log(files)


console.log("Before reading directory");

fs.readdir('444', (err, files) => {
    if (err) console.error('Error reading directory:', err)
    else console.log('Files in directory:', files)
})


console.log("After reading directory");
