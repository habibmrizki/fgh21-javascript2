// 1.) Method Concat
// Method concat digunakan untuk menggabungkan 2 atau lebih array.
// Contoh :
const temanRizki = ["Dadang", "Temon", "Goping"];
const temanMoro = ["Wahyu", "Reza", "Pondel"];
const temanDara = ["Gepok", "Cemil", "Leni"];
const temanSemua = temanRizki.concat(temanMoro, temanDara);
console.log(temanSemua);

// 2.) Method Slice
// Method slice digunakan untuk memilih satu atau beberapa item dari sebuah array untuk menjadi array yang baru
// Contoh :
const buah = ["Mangga", "Jeruk", "Pisang", "Manggis", "Duku"];
const beberapaBuah = buah.slice(1, 3);
console.log(beberapaBuah);

// 3.) Method Splice
// Method Splice digunakan untuk  menghapus array , menambahkan elemen array dan menggantikan array
// Contoh menambah array
const namaOrang = ["andhika", "bambang", "joko", "galih", "kiki"];
namaOrang.splice(2, 0, "Anwar", "budi");
console.log(namaOrang);
// Contoh menghapus array
const namaTeman = ["andhika", "bambang", "joko", "galih", "kiki"];
namaTeman.splice(1, 2);
console.log(namaTeman);
// Contoh menggantikan array
const namaSahabat = ["andhika", "bambang", "joko", "galih", "kiki"];
namaSahabat.splice(1, 1, "kiya");
console.log(namaSahabat);

// 4.) Method join
// Method join digunakan untuk menggabungkan seluruh isi array dan mengubahnya menjadi string
// contoh :
const arr = ["sandhika", "nofa", "galih"];
console.log(arr.join(" "));

// 5.) Method filter
// Method Filter digunakan untuk mengembalikan banyak nilai
// Contoh :
const angka = [1, 2, 10, 5, 20, 3, 6, 7, 4, 8];
const angka2 = angka.filter(function (x) {
  return x > 5;
});
console.log(angka2);

// 6.) Method length
// Method length digunakan untuk mengetahui berapa jumlah elemen pada array
// contoh :
const apa = ["sandhika", "nofa", "galih"];
for (var i = 0; i < apa.length; i++) {
  console.log("Mahasiswa ke- " + (i + 1) + ": " + apa[i]);
}

// 7.) Method push
// Method Pudh digunakan untuk menambah elemen array di akhir array
// contoh :
const yoi = ["Dadang", "Temon", "Goping"];
yoi.push("Tejo");
console.log(yoi);

// 8.) Method pop
// Method Pudh digunakan untuk menghapus elemen array di akhir array
// contoh :
const yoman = ["Dadang", "Temon", "Goping"];
yoi.pop();
console.log(yoman);

// 9.) unshift
// Method Pudh digunakan untuk menambah elemen baru array di awal array
// contoh :
const gas = ["Dadang", "Temon", "Goping"];
gas.unshift("Mahesa");
console.log(gas);

// 10.) shift
// Method Pudh digunakan untuk menghapus elemen array di awal array
// contoh :
const cok = ["Dadang", "Temon", "Goping"];
cok.shift();
console.log(cok);
