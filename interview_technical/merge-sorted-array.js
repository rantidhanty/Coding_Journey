/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let midx = m - 1;
  let nidx = n - 1;
  let right = m + n - 1;

  while (nidx >= 0) {
    if (midx >= 0 && nums1[midx] > nums2[nidx]) {
      nums1[right] = nums1[midx];
      midx--;
    } else {
      nums1[right] = nums2[nidx];
      nidx--;
    }
    right--;
  }
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1);