/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function (nums) {
  let i = 1;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i - 1]) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};
console.log(removeDuplicates([1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 9 ,0]));