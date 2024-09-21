//Solve Me First
// function solveMeFirst(a, b){
//     return a + b;
// }
// console.log(solveMeFirst(2,3));


//Compare Triplets
// function compareTriplets(a, b) {
//     let alice = 0;
//     let bob = 0;
//     let answer =[];
//     for(let i = 0; i < a.length; i++){
//         if(a[i] > b[i]) alice++
//         if(a[i] < b[i]) bob++
//     }
//     answer[0] = alice;
//     answer[1] = bob;
//     return answer;
// }
// let a = [5, 6, 7];
// let b = [3, 6, 10];
// let c = compareTriplets(a, b)
// console.log(c)

//
export const whoWon = (board = []) => {
    let symbols = {};
    board.flat().map((b) => {
        if (!(b in symbols)) symbols[b] = 0;
    });
    let patterns = [
        [
            [0, 0],
            [0, 1],
            [0, 2],
        ],
        [
            [1, 0],
            [1, 1],
            [1, 2],
        ],
        [
            [2, 0],
            [2, 1],
            [2, 2],
        ],
        [
            [0, 0],
            [1, 0],
            [2, 0],
        ],
        [
            [0, 1],
            [1, 1],
            [2, 1],
        ],
        [
            [0, 2],
            [1, 2],
            [2, 2],
        ],
        [
            [0, 0],
            [1, 1],
            [2, 2],
        ],
        [
            [0, 2],
            [1, 1],
            [2, 0],
        ],
    ];
    for (let symbol in symbols) {
        patterns.forEach((pattern) => {
            let checkPattern = [];
            pattern.forEach((p) => {
                checkPattern.push(board[p[0]][p[1]]);
            });
            if (checkPattern.every((c) => c === symbol)) symbols[symbol]++;
        });
    }
    console.log(symbols);
    const values = Object.values(symbols);
    const allEqual = values.every((val, i, arr) => val === arr[0]);
    if (allEqual) {
        return "tie";
    } else {
        const maxScore = Math.max(...values);
        const winner = Object.keys(symbols).find((key) => symbols[key] === maxScore);
        return `${winner} win`;
    }
};

console.log(whoWon([
    ['x','o','x'],
    ['o','o','x'],
    ['o','x','o'],
]))
