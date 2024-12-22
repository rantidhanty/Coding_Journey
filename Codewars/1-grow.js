//1/366
//2024-coding challenge
//Beginner - Reduce but Grow
//https://www.codewars.com/kata/57f780909f7e8e3183000078



//cara 1

// function grow(x){
//     let result = x[0];
//     for (let i = 1; i < x.length; i++){
//         result *= x[i];
//     }
//     return result;

// }

//cara 2

// function grow(x){
//     const result = x.reduce((acc, curr) => acc * curr, 1);
//     return result;
// }

//cara 3
const grow = (x) => x.reduce((acc, curr)=> acc * curr, 1);

console.log(grow([1, 2, 3, 4]));
