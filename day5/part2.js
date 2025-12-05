import fs from "fs";

const text = fs.readFileSync("data.txt", "utf8").trim();
const data = text.split('\n\n');
let freshRanges = data[0].split('\n').map(str=>{
    const [start, end] = str.split('-').map(BigInt);
    return [start, end]
});

const masterList = [];

for (let i = 0; i < freshRanges.length; i++) {
    let curr = freshRanges[i];

    for (let j = masterList.length - 1; j >= 0; j--) {
        const prev = masterList[j];

        const overlap = (curr[0] >= prev[0] && curr[0] <= prev[1]) || (curr[1] >= prev[0] && curr[1] <= prev[1]) || (curr[0] <= prev[0] && curr[1] >= prev[1]);
        
        if (overlap) {
            const newRange = [
                curr[0] < prev[0] ? curr[0] : prev[0],
                curr[1] > prev[1] ? curr[1] : prev[1]
            ];
            masterList.splice(j,1);
            curr = newRange;
        }
    }
    masterList.push(curr)
};
// [3,5]
// [10-14]
// [16-20]
// [12-18] --> [12,20] --> [10,20]

const total = masterList.reduce((total, [start, end])=>{
    return total + (end - start + 1n);
}, 0n);

console.log('Res:', total.toString());