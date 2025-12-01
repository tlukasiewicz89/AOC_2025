import fs from "fs";

const text = fs.readFileSync("data.txt", "utf8").trim();
const lines = text.split("\n");

let current = 50;

let answer = 0;

const rotate = (d) => {
    const direction = d[0];
    let distance = Number(d.slice(1));

    if (direction === "R"){
        while (distance){
            if (current === 99){
                current = 0;
            } else {
                current++;
            }
            distance--;
        }
    }
    if (direction === 'L'){
        while (distance){
            if (current === 0){
                current = 99;
            } else {
                current--;
            }
            distance--;
        }
    }
    if (current === 0) answer++;


}

lines.forEach(line=>rotate(line));

console.log('ANSWER:', answer)