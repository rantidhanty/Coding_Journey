/* 
Square(n) Sum
https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

https://www.codewars.com/kata/515e271a311df0350d00000f/solutions/javascript
*/

//cara 1
function squareSum(numbers) {
    let jumlah = 0;
    for(let i = 0; i < numbers.length; i++){
        jumlah += numbers[i] * numbers[i];
    }
    return jumlah
}
console.log(squareSum([1,2,2]))



//cara 2
// function squareSum(numbers){
//     return numbers.reduce((sum, num) => sum + num * num,0);
// }
// console.log(squareSum([1,2,2]))