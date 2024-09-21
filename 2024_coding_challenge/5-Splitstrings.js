/*
Split Strings
https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript


*/

function solution(str){
    const pairs = [];
   
   for (let i = 0; i < str.length; i += 2) {
     const pair = str.slice(i, i + 2);
     pairs.push(pair.length == 1 ? pair + '_' : pair);
   }
   return pairs;
 }
 
 console.log(solution("abcdefg")); // ['ab_', 'cd_', 'ef_', 'gh_']