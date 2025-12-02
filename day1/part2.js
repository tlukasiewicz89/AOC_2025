import fs from "fs";

const text = fs.readFileSync("data.txt", "utf8").trim();
const lines = text.split("\n");

let current = 50;
let answer = 0;

const rotate = (d) => {
    const direction = d[0];
    let distance = Number(d.slice(1));

    if (direction === "R"){
        while (distance--){
            current = current === 99 ? 0 : current + 1
            if (current === 0) answer++;
        }
    }
    if (direction === 'L'){
        while (distance--){
            current = current === 0 ? 99 : current - 1
            if (current === 0) answer++;
        }
    }
}

lines.forEach(line=>rotate(line));

console.log('ANSWER:', answer)