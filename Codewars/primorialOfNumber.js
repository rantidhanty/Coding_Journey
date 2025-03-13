/**
 * Menghitung primorial dari sebuah bilangan bulat positif n.
 * Primorial adalah hasil perkalian dari n bilangan prima pertama.
 * @see https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124
 *
 * @param {number} n - Jumlah bilangan prima pertama yang akan dikalikan.
 * @returns {number} - Hasil perkalian dari n bilangan prima pertama (primorial).
 * @example
 * numPrimorial(3); // Output: 30 (2 * 3 * 5 = 30)
 * numPrimorial(5); // Output: 2310 (2 * 3 * 5 * 7 * 11 = 2310)
 */
const numPrimorial = (n) => {
  let count = 0;
  let product = 1;
  let current = 2;
  let primesNumber = [];

  while (count < n) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(current); i++) {
      if (current % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      product *= current;
      primesNumber.push(current);
      count++;
    }
    current++;
  }

  const primeString = primesNumber.join(" * ");
  console.log(`${primeString} = ${product}`);

  return product;
};

console.log(numPrimorial(3)); // Output: 30
console.log(numPrimorial(5)); // Output: 2310
