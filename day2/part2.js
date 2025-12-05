import fs from "fs";

const text = fs.readFileSync("data.txt", "utf8").trim();

const isRepeating = (str) => {
    const len = str.length;
    for (let size = 1; size <= len / 2; size++) {
        if (len % size === 0) {
            const piece = str.slice(0, size);
            if (piece.repeat(len / size) === str) {
                return true;
            }
        }
    }
    return false;
};

const res = text
    .split(',')
    .map(range => {
        const [start, end] = range.split('-').map(Number);
        const invalids = [];

        for (let i = start; i <= end; i++) {
            const s = String(i);
            if (isRepeating(s)) {
                invalids.push(i);
            }
        }

        return invalids;
    })
    .flat()
    .reduce((a, b) => a + b, 0)

console.log(res);
