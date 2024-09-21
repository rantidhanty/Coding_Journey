//3/366
//2024-coding challenge
//Is he gonna survive?
//https://www.codewars.com/kata/59ca8246d751df55cc00014c

//cara 1
// function hero(bullets, dragons){
//     //Get Coding!
//     if (bullets/2 >= dragons) {
//         return true;
//     } else {
//         return false;
//     }
// }

//cara 2
// function hero(bullets, dragons){
//     return bullets / 2 >= dragons;
// }

//cara 3 menggunakan variable const
const hero = (bullets, dragons) => bullets /2 >= dragons;
    
console.log(hero(10,5));