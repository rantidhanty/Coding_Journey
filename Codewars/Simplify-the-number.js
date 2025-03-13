/**
 * Simplify a number by breaking it into digit and power of 10 format.
 * @param {number} number - The input number to be simplified.
 * @returns {string} - The simplified number as a string.
 * @see {@link https://www.codewars.com/kata/5800b6568f7ddad2c10000ae/javascript} for the original problem statement.
 * @example
 * // returns "5*10+6"
 * simplify(56);
 */
function simplify(number) {
  if (number === 0) return "not a number";
  let toString = number.toString();
  let result = "";

  for (let i = 0; i < toString.length; i++) {
    let power = Math.pow(10, toString.length - i - 1);

    // Cek kalau digitnya bukan nol
    if (toString[i] !== "0") {
      // Kalau digit terakhir, gak perlu tambah *
      if (power === 1) {
        result += `${toString[i]}`;
      } else {
        result += `${toString[i]}*${power}+`;
      }
    }
  }

  // Hapus tanda plus (+) terakhir
  if (result.endsWith("+")) {
    result = result.slice(0, -1);
  }

  return result;
}
console.log(simplify(0)); // not a number
console.log(simplify(56)); // 5*10+6
console.log(simplify(10004)); // 1*10000+4
