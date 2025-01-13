/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const seen = new Set();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const value = board[i][j];
      if (value !== ".") {
        const rowKey = `row-${i}-${value}`;
        const colKey = `col-${j}-${value}`;
        const boxKey = `box-${Math.floor(i / 3)}-${Math.floor(j / 3)}-${value}`;

        if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
          return false;
        }

        seen.add(rowKey);
        seen.add(colKey);
        seen.add(boxKey);
      }
    }
  }

  return true;
};
console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
