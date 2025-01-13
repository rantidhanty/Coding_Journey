/**
 * @param {string[]} operations
 * @return {number}
 */
const calPoints = function (operations) {
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
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));