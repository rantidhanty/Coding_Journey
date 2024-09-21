function generateSequence(n) {
    let sequence = [];
        for (let i = 1; i <= n; i++) {
            let term = '1';  
            let currentOddNumber = 1;
    
            if ( i === 2 ){
                term += "+";
            }
    
            for (let j = 3; j <= i; j++) {
                currentOddNumber += 2;
                term += '+' + currentOddNumber; 
            }
            sequence.push(term);
        }
        return sequence;
    }
    
    console.log(generateSequence(4).join('\n'));
    
    function printPattern1() {
        let result = "";
        let patterns = [
            "12345",
            "++++",
            "123",
            "++",
            "1"
        ];
    
        for (let i = 0; i < patterns.length; i++) {
            result += patterns[i] + "\n";
        }
    
        console.log(result);
    }
    
    printPattern1();
    