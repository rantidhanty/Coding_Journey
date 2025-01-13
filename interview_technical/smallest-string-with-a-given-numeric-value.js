/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getSmallestString = function (n, k) {
  k -= n;
  let alpha = "_bcdefghijklmnopqrstuvwxy_";
  let answer = "z".repeat(~~(k / 25));
  if (k % 25) {
    answer = alpha[k % 25] + answer;
  }
  return answer.padStart(n, "a");
};
console.log(getSmallestString(1, 5));

