// function generateSequence(n) {
//     let sequence = [];
//     for (let i = 1; i <= n; i++) {
//         let term = '1';  
//         let currentOddNumber = 1;

//         for (let j = 2; j <= i; j++) {
//             currentOddNumber += 2;
//             term += '+' + currentOddNumber; 
//         }

//         sequence.push(term);
//     }
//     return sequence;
// }

// console.log(generateSequence(3).join('\n'));

// function generateSequence(n) {
//     let sequence = [];
//     for (let i = 1; i <= n; i++) {
//         let term = '1';  
//         let currentOddNumber = 1;
        
//         if (i ===2) {
//             term += "+";
//         }

//         for (let j = 3; j <= i; j++) {
//             currentOddNumber += 2;  
//             term += '+' + currentOddNumber; 
//         }

//         sequence.push(term);
//     }
//     return sequence;
// }

// console.log(generateSequence(4).join('\n'));

function generateSequence(n) {
    let sequence = [];
        for (let i = 1; i <= n; i++) {
            let term = '1';  
            let currentOddNumber = 1;  // Mulai dengan 1
    
            if ( i === 2 ){
                term += "+";
            }
    
            for (let j = 3; j <= i; j++) {
                currentOddNumber += 2;  // Tambahkan 2 untuk mendapatkan bilangan ganjil berikutnya
                term += '+' + currentOddNumber; 
            }
    
           
        }
        return sequence;
    }
    
    console.log(generateSequence(4).join('\n'));
    
    