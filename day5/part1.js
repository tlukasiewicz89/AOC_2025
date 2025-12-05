import fs from "fs";

const text = fs.readFileSync("data.txt", "utf8").trim();

const data = text.split('\n\n');
const freshRanges = data[0].split('\n');
const items = data[1].split('\n');

let total = 0;

const freshDict = freshRanges.reduce((dict, range)=>{
    range = range.split('-');
    dict.push([Number(range[0]), Number(range[1])])
    return dict;
}, [])

items.forEach(item =>{
    for (let i = 0; i < freshDict.length; i++) {
        const range = freshDict[i];
        const start = range[0]
        const end = range[1];

        const found = item >= start && item <= end;
        if (found){
            total++;
            break;
        }
    }
})

console.log('Res:', total);