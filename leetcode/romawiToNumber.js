/**
 * @param {string} s
 * @return {number}
 */

const romawitoInt = function(s){
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let ans = 0;
    s = s.toUpperCase();

    for (let char of s){
        if(!map[char]){
            return "angka tidak valid";
        }
    }

    for (let i = 0; i < s.length; i++){
        if(map[s[i]] < map[s[i+1]]){
            ans -= map[s[i]];
        }
        // if(!map[s[i]]){
        //     return "angka tidak valid"
        // }
        else{
            ans += map[s[i]];
        }
    }
    return ans;
}

console.log(romawitoInt("qq"));