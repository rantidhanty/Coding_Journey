/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = function (x) {
  if (x < 0) return false;
  let num = x;
  let rev = 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev === x;
};

console.log(isPalindrome(121345));