//4/366
//2024-coding challenge
//Sentence Smash
//https://www.codewars.com/kata/53dc23c68a0c93699800041d

//cara 1
// function smash (words) {
//     return words.join(' ')
//  };

//cara 2
//const smash = (words) => words.join(' ');

//cara 3 versi wpu
function smash(words) {
    let result = '';
    for (let i = 0; i < words.length; i++){
        result += words[i];
        if (i != words.length - 1) result += ' ';
    }

    return result;
}

 console.log(smash(["this", "is", "a", "really", "long", "sentence"]));


  