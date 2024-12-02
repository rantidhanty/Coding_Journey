/**
 * Problem 3: Largest prime factor
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143 ?
 */
function largestPrimeFactor(number) {
  let factor = 2;

  while (number > 1) {
    if (number % factor === 0) {
      number /= factor; // Bagi number dengan factor
    } else {
      factor++; // Tingkatkan factor jika tidak habis
    }
  }

  return factor; // Faktor terakhir adalah yang terbesar
}
console.log(largestPrimeFactor(600851475143)); // Output: 6857

console.log(largestPrimeFactor(13195)); // Output: 29
