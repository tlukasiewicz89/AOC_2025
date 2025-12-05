import fs from "fs";

const text = fs.readFileSync("data.txt", "utf8").trim();
const lines = text.split("\n");
const grid = lines.map(line=>line.split(''));

let total = 0;

const checkAround = (r, c) => {
    let hasRoom = 0;
    const top = [[r-1,c-1], [r-1,c], [r-1, c+1]];
    const middle = [[r,c-1], [r, c+1]];
    const bottom = [[r+1,c-1], [r+1,c], [r+1, c+1]];
    const indexesToCheck = [...top, ...middle, ...bottom];
    indexesToCheck.forEach(data=>{
        const row = data[0];
        const col = data[1];
        if (grid?.[row]?.[col] !== '.'){
            hasRoom++;
        }
    })
    return hasRoom < 4 ? 1 : 0;
}

grid.forEach((row, rowIndex )=> {
    row.forEach((roll, colIndex)=>{
        if (roll === '@'){
           total += checkAround(rowIndex, colIndex);
        }
    })
})


console.log('Total Rolls:', total);