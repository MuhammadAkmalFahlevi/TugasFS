const fs = require('fs');

fs.readFile('terserah.txt', async (err, data) => {
    if(err) console.log("Data Tidak Ditemukan!");

    await console.log("Data Ditemukan!");

    fs.unlink('Terserah.txt', (err) =>{

        if(err) console.log("Gagal Hapus Data!");

        console.log("Hapus data berhasil!")
    })
})