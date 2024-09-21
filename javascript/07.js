//forEach metode perulangan pada array
let angka = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < angka.length; i++){
//     console.log(angka[i]);
// }

//menggunakan forEach
//cara bacanya : lakukan dari variabel angka untuk setiap e atau elemen menggunakan function ekspresion pakai parameter untuk e. hasilnya sama dengan for loop

//cara 1
// angka.forEach(function(e) {
//     console.log(e);
// })


//cara 2
// sama seperti cara 1, tapi function expresi nya lebih di detailkan terlebih dahulu
// let cetak = function(e){
//     console.log(e);
// }
// angka.forEach(cetak);

//menggunakan index
// let namaBuah = ['jeruk', 'mangga', 'apel', 'pisang'];
//pakai 2 parameter di function expresinya
//e = element array, i = nomor index
//cara 1
// namaBuah.forEach(function(e, i) {
//     console.log(`buah ke-${i + 1} adalah ${e}`);
// })

//map() sama seperti forEach, tapi lebih baik map() mengembalikan array sedangkan forEach tidak
// let number = [1, 4, 2, 6, 3, 7, 5, 8]
// let number2 = number.map(function(e) {
//     return e * 2;
// })
// console.log(number2.join(' - '))

//sort
// let number = [1, 4, 2, 6, 3, 7, 5, 8]
// number.sort();
// console.log(number.join(' - '));

//sort
//ini hasil outputnya karakter pertama di urut
let number3 = [1,2,10,5,20,3,6,8,4]
number3.sort()
console.log(number3.join(' - '))

//ini hasil outputnya angka diurutkan dari kecil ke besar
number3.sort(function(a,b) {
    return a - b
});
console.log(number3.join(' - '))
