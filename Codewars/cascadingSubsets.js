/**
 * @param {array[]} array
 * @param {number} n
 * @return {array[]}
 */
const eachCons = (array, n) => {
  let result = [];
  for (let i = 0; i <= array.length - n; i++) {
    let subset = array.slice(i, i + n); //logic 1
    result.push(subset);

    // result.push(array.slice(i, i + n)) //logic 2
  }
  return result;
};

console.log(eachCons([1, 2, 3, 4, 5], 4));
