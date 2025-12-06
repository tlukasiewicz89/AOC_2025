import fs from "fs";

const text = fs.readFileSync("data.txt", "utf8").trim();

const data = text.split('\n').map(row=>row.split(/\s+/).filter(Boolean))

const nums = data.slice(0, data.length - 1);
const operations = data.slice(-1)[0];

let total = 0;

const calc = (type, a, b) => {
    if (type === '+') return a + b;
    if (type === '*') return a * b;
}

operations.forEach((operand, colIndex)=>{
    const col = nums.map(row=>row[colIndex]) 
    total += col.reduce((a, b)=>{
        return calc(operand, Number(a), Number(b));
    })
})

console.log('Res:', total);