/**
 * Menjumlahkan dua angka
 */
function jumlahkan(a, b) {
  return a + b;
}
console.log(jumlahkan(5, 9));

/**
 * Menentukan bilangan ganjil atau genap
 */

function cekGanjilGenap(angka) {
  if (angka % 2 === 0) {
    return `angka genap`;
  } else {
    return `angka ganjil`;
  }
}
console.log(cekGanjilGenap(7));

function balikanString(str) {
  return str.split("").reverse().join("");
}
console.log(balikanString("dhanty"));

/**
 * Menghitung total angka dalam array
 */
function hitungTotal(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(hitungTotal([1, 2, 3, 4, 5]));

/**
 * Cari terbesar
 */

function cariTerbesar(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(cariTerbesar([3, 7, 2, 4]));

/**
 * function cari nama paling panjang
 */

function namaPalingPanjang(nama) {
    //cek jika nama kosong
  if(nama.length === 0){
    return 'nama kosong';
  }

  //inisialisasi nama dengan elemen pertama
  let namaTerpanjang = nama[0];

  //iterasi setiap nama dalam array
  for (let i = 1; i < nama.length; i++){
    if (nama[i].length > namaTerpanjang.length){
        namaTerpanjang = nama[i];
    }
  }
  return namaTerpanjang;

}
console.log(namaPalingPanjang(["caca", "diracia", "ramadhanty", "oke"]));
