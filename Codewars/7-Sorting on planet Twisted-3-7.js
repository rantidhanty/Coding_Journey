/**
 * Mengurutkan array dengan membalik angka 3 dan 7 
 * @link https://www.codewars.com/kata/58068479c27998b11900056e
 * @param {number[]} array 
 * @returns {number[]}
 */
function sortTwisted37(array) {
  const MAPPING = { 7: 3, 3: 7 };

  return array.slice().sort((a, b) => twist(a) - twist(b));

  function twist(number) {
    return parseInt(number.toString().replace(/[37]/g, (a) => MAPPING[a]));
  }
}

let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(sortTwisted37(numbers));
