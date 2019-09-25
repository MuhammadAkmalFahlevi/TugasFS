const fs = require('fs')

console.log('start reading File...')

fs.readFile('text.txt', 'utf-8', (err, content) =>{
    if (err){
        console.log('error happened during readingbthe file')
        return console.log(err)
    }

    console.log("HOREE BERHASIIL! Datanya Bro: "+content );
})

console.log('end of the file')