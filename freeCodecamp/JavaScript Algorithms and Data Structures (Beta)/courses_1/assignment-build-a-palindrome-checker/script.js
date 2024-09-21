const userInput = document.getElementById('text-input');
const cekBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

function checkPalindrome() {
    const inputValue = userInput.value.trim();

    if (inputValue === ''){
        alert ("Please input a value")
        result.classList.add('hidden');
        return;
    }

    const cleanedValue = inputValue.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const reversedValue = cleanedValue.split('').reverse().join('');

    if (cleanedValue === reversedValue) {
        result.textContent = `"${inputValue}" is a palindrome`;
    } else {
        result.textContent = `"${inputValue}" is not a palindrome`
    }
    result.classList.remove('hidden');
}

cekBtn.addEventListener("click", checkPalindrome);

userInput.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        event.preventDefault();
        checkPalindrome();
    }
})