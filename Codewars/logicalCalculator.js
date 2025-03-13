/**
 * Melakukan operasi logika pada array boolean berdasarkan operator yang diberikan.
 * @see {@link https://www.codewars.com/kata/57096af70dad013aa200007b}
 *
 * @param {boolean[]} array - Array berisi nilai boolean (true/false).
 * @param {string} op - Operator logika yang digunakan ("AND", "OR", "XOR").
 * @returns {boolean} - Hasil dari operasi logika.
 * @example
 * logicalCalc([true, true, true], "AND"); // Output: true
 * logicalCalc([true, false, true], "XOR"); // Output: false
 */
function logicalCalc(array, op) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    if (op === "AND") {
      result = result && array[i];
    } else if (op === "OR") {
      result = result || array[i];
    } else if (op === "XOR") {
      result = result !== array[i];
    }
  }
  return result;
}
console.log(logicalCalc([true, true, true], "AND"));
console.log(logicalCalc([true, false, true], "XOR"));

/**
 * Menghitung jumlah akhir berdasarkan daftar operasi skor.
 * Setiap operasi bisa berupa angka, "+", "D", atau "C".
 * Link Codewars: {@link https://www.codewars.com/kata/682eaf0b0222d4eb6d000ba4}
 *
 * @param {string[]} operations - Daftar operasi skor dalam bentuk string.
 * @returns {number} - Total skor setelah semua operasi dilakukan.
 * @example
 * calPoints(["5", "2", "C", "D", "+"]); // Output: 30
 * calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]); // Output: 27
 */
var calPoints = function (operations) {
  const stk = [];
  for (const op of operations) {
    if (op === "+") {
      stk.push(stk.at(-1) + stk.at(-2));
    } else if (op === "D") {
      stk.push(stk.at(-1) << 1);
    } else if (op === "C") {
      stk.pop();
    } else {
      stk.push(+op);
    }
  }
  return stk.reduce((a, b) => a + b, 0);
};
console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
