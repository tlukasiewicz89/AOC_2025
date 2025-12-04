import fs from "fs";

const text = fs.readFileSync("data.txt", "utf8").trim();
const lines = text.split("\n");

let total = 0;
const BANK_LENGTH = 2;

const findBiggest = (bank, start, end) => {
    let biggest = 0;
    let index = 0;
    for (let i = start; i < end; i++) {
        let num = bank[i];
        if (num > biggest) {
            biggest = num;
            index = i;
        }
    }
    return { biggest, index }
}

lines.forEach(bank=>{
    const nums = bank.split('');

    let res = '';
   
    let start = 0;
    let length = bank.length;
    for (let i = 0; i < BANK_LENGTH; i++) {
        let last = length - BANK_LENGTH + res.length + 1 ;
        const {biggest, index} = findBiggest(nums, start, last);
        res += biggest;
        start = index + 1;

        if (length - i === 0) {
            res += bank(i);
            break;
        }
    }

    total += Number(res);
})

console.log('Total Bank:', total);