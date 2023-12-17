function hitungParkir() {
    //Tangkap angka yg user input
    let masuk = document.getElementById('masuk').value
    let keluar = document.getElementById('keluar').value

    //Tangkap span untuk hasil
    let hasilDurasi = document.getElementById("hasilDurasi")
    let totalBiaya = document.getElementById("totalBiaya")

    //Hitung durasi parkir
    let durasi = keluar - masuk

    let biaya = 3000

    //Hitung biaya parkir
    for (let i = 2; i < durasi; i++){
        biaya = biaya + 1000
    }

    // Menampilkan hasil perhitungan
    hasilDurasi.innerHTML = durasi
    totalBiaya.innerHTML = biaya
}