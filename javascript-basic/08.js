/**
 * Menjumlahkan dua angka
 */
function jumlahkan(a, b){
    return a + b;
}
console.log(jumlahkan(5, 9))

/**
 * Menentukan bilangan ganjil atau genap
 */

function cekGanjilGenap(angka){
    if(angka % 2 === 0){
        return `angka genap`;
    }else{
        return `angka ganjil`
    }
}
console.log(cekGanjilGenap(7));

function balikanString(str){
    return str.split('').reverse().join('');
}
console.log(balikanString('dhanty'))

/**
 * Menghitung total angka dalam array
 */
function hitungTotal(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}
console.log(hitungTotal([1, 2, 3, 4, 5]))

/**
 * Cari terbesar
 */

function cariTerbesar(arr){
    let max = arr[0];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max
}
console.log(cariTerbesar([3,7,2,4]))
