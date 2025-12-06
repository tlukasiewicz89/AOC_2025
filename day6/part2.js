import fs from "fs";

const text = fs.readFileSync("data.txt", "utf8");

const data = text.split('\n');
const rowLength = data.length;

let total = 0;

const calc = (type, a, b) => {
    if (type === '+') return a + b;
    if (type === '*') return a * b;
}

let colToAdd = [];

for (let i = data[0].length - 1; i >= 0; i--) {
    // iterate over row in reverse
    let operand = ''; // flag resets on each column
    let str = ''; // use string to create a number
    for (let j = 0; j < rowLength; j++) {
        const val = data[j][i];
        if (val === '+' || val === '*') {
            operand = val;
        } else {
            str += val;
        }
    }
    colToAdd.push(Number(str));
    
    if (operand) {
        total += colToAdd.reduce((a,b)=>calc(operand, a, b));
        colToAdd = []; // reset
        i--; // skip space
    }
}

console.log('Res:', total);