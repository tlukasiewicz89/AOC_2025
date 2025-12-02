import fs from "fs";

const text = fs.readFileSync("data.txt", "utf8").trim();
const lines = text.split("\n");

let current = 50;
let answer = 0;

const rotate = (d) => {
    const direction = d[0];
    let distance = Number(d.slice(1));

    if (direction === "R") current = (current + distance) % 100;
    if (direction === 'L') current = (current - distance) % 100;
    if (current === 0) answer++;
}

lines.forEach(line=>rotate(line));

console.log('ANSWER:', answer)