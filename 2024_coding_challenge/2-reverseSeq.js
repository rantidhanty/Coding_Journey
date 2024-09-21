//2/366
//2024-coding challenge
//Reversed sequence
//https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

//CARA 1

// const reverseSeq = n => {
//     const result = [];
//     for (let i = n; i >= 1; i--) {
//         result.push(i);
//     }


//     return result;

//   };

//CARA 2

// const reverseSeq = (n) => [...Array(n)].map((el, i) => i + 1).reverse();

//CARA 3
const reverseSeq = (n) => [...Array(n)].map((el, i) => n -i);

  console.log(reverseSeq(5));