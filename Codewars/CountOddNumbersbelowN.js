/**
 * Menghitung nilai ganjil terdekat di bawah atau sama dengan n.
 * @see {@link https://www.codewars.com/kata/59342039eb450e39970000a6} for the original problem statement.
 * @param {number} n - Angka input.
 * @returns {number} - Nilai ganjil terdekat di bawah atau sama dengan n.
 * @example
 * // Contoh penggunaan:
 * oddValue(7); // 3
 * oddValue(10); // 5
 */
const oddValue = (n) => {
  const result = Math.floor(n / 2);
  return result;
};
console.log(oddValue(7));

/**
 * Menghasilkan deret bilangan ganjil dari 1 hingga n (tidak termasuk n).
 *
 * @param {number} n - Batas atas (tidak termasuk).
 * @returns {number[]} - Array berisi bilangan ganjil.
 * @example
 * // Contoh penggunaan:
 * oddValuePartTwo(7); // [1, 3, 5]
 * oddValuePartTwo(10); // [1, 3, 5, 7, 9]
 */
const oddValuePartTwo = (n) => {
  const result = [];
  for (let i = 1; i < n; i += 2) {
    result.push(i);
  }
  return result;
};
console.log(oddValuePartTwo(7));

/**
 * Menghasilkan objek yang berisi jumlah dan daftar bilangan ganjil dari 1 hingga n (tidak termasuk n).
 *
 * @param {number} n - Batas atas (tidak termasuk).
 * @returns {Object} - Objek dengan properti `count` dan `number`.
 * @property {number} count - Jumlah bilangan ganjil.
 * @property {number[]} number - Daftar bilangan ganjil.
 * @example
 * // Contoh penggunaan:
 * oddValuePartThree(7); // { count: 3, number: [1, 3, 5] }
 * oddValuePartThree(10); // { count: 5, number: [1, 3, 5, 7, 9] }
 */
const oddValuePartThree = (n) => {
  const result = [];
  for (let i = 1; i < n; i += 2) {
    result.push(i);
  }
  return {
    count: result.length,
    number: result,
  };
};
console.log(oddValuePartThree(7));
