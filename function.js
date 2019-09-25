class Mobil{
    constructor(tipe, warna){
        this.tipe = tipe
        this.warna = warna
    }
    
    jalankan(){
        console.log("jalankan mobil"+this.tipe+" yang warnanya "+ this.warna)
    }

    berhenti (kondisi){
        if(kondisi == "berhenti"){
            return " mobil "+this.tipe+" yang warnanya "+this.warna+" sudah berhenti"
        }else{
            return " mobil "+this.tipe+" yang warnanya "+this.warna+" masih jalan"
        }
    }
}

const classMobil = new Mobil('Jeep','Pink')
console.log(classMobil.jalankan())