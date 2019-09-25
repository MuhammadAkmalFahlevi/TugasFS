const fs =  ('fs')

console.log('start reading file...')

fs.readFile('text.txt', 'utf-8', (err,content) =>{
if (err){
    console.log('error happenned during reading the file')
    return console.log(err)
}

fs.rename('text.txt', 'terserah,txt', (err)=>{
    if(err) console.log("Gagal Rename !"+err);
    console.log("berhasil")
})
})

console.log('end of the file')