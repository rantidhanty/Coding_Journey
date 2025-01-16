/**
 *
 * @param {number} n
 * @returns {boolean}
 */

function isOre(n) {
    //langkah 1 temukan divisor dari n
  let divisors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  //hitung jumlah kebalikan dari setiap divisor
  let reciprocalSum = 0;
  for (const divisor of divisors) {
    reciprocalSum += 1 / divisor;
  }
  //hitung rata-rata
  let harmonicMean = divisors.length / reciprocalSum;
  //cek apakah rata-rata adalah integer
  return Math.abs(harmonicMean - Math.round(harmonicMean)) < 1e-10;
}

console.log(isOre(6));
console.log(isOre(10));
console.log(isOre(28));
console.log(isOre(32));
