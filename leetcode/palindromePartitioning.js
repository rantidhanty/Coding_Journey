/**
 * @param {string} s
 * @return {string[][]}
 */
let partition = function (s) {
  let res = []; // final result
  let n = s.length; // length of string

  // function to check if a string is a palindrome
  function isPalindrome(str) {
    let left = 0; // left pointer
    let right = str.length - 1; // length of string
    // loop through the string
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++; // move left pointer
      right--; // move right pointer
    }
    return true;
  }

  // function to get all partitions
  function getAllPartitions(curInd, curList) {
    // curInd = current index, curList = current list
    let isLastPalindrome = isPalindrome(curList[curList.length - 1]); // check if last string is a palindrome
    // base case if current index is equal to length of string
    if (curInd === n) {
        // if last string is a palindrome then add current list to result
      if (isLastPalindrome) {
        res.push([...curList]); // add current list to result
      }
      return;
    }
    // if last string is not a palindrome then add current string to current list
    if (isLastPalindrome) {
      curList.push(s[curInd]); // add current string to current list
      getAllPartitions(curInd + 1, curList); // get all partitions 
      // remove last string from current list
      curList.pop();
    }
    curList[curList.length - 1] += s[curInd]; // add current string to last string
    getAllPartitions(curInd + 1, curList);// get all partitions
    curList[curList.length - 1] = curList[curList.length - 1].slice(0, -1); // remove last character from last string
  }
  // get all partitions of string s from index 1 to n and add to result
  getAllPartitions(1, [s[0]]);
  return res;
};

console.log(partition("abbomnnn"));
