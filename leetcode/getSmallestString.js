let getSmallestString = function (n, k) {
  k -= n;
  let alpha = "_bcdefghijklmnopqrstuvwxy_";
  console.log(alpha);
  let answer = "z".repeat(~~(k / 25));
  console.log(answer);
  if (k % 25) {
    answer = alpha.charAt(k % 25) + answer;
  }
  return answer.padStart(n, "a");
};

console.log(getSmallestString(1, 5));
