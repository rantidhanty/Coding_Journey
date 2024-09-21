const form = document.getElementById("form");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertToRoman = () => {
    const list = [
        {numeral: "M", value: 1000},
        {numeral: "CM", value: 900},
        {numeral: "D", value: 500},
        {numeral: "CD", value: 400},
        {numeral: "C", value: 100},
        {numeral: "XC", value: 90},
        {numeral: "L", value: 50},
        {numeral: "XL", value: 40},
        {numeral: "X", value: 10},
        {numeral: "IX", value: 9},
        {numeral: "V", value: 5},
        {numeral: "IV", value: 4},
        {numeral: "I", value: 1}
    ]

    let number = parseInt(document.getElementById("number").value)

    if (isNaN(number)) {
        output.textContent = "Please enter a valid number"
    } else if(number < 1){
        output.textContent = "Please enter a number greater than or equal to 1"
    } else if (number > 3999){
        output.textContent = "Please enter a number less than or equal to 3999";
    } else {
        let romanNumeral = "";

        for (let i = 0; i < list.length; i++){
            while (number >= list[i].value) {
                romanNumeral += list[i].numeral;
                number -= list[i].value;
            }
        }
        output.textContent = romanNumeral;
    }
}
convertBtn.addEventListener('click', convertToRoman);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    convertToRoman();
})

document.getElementById("number").addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        convertToRoman();
    }
})