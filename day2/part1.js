import fs from "fs";

const text = fs.readFileSync("data.txt", "utf8").trim();

const res = text
    .split(',')
    .map(range=>{
        const [start, end] = range.split('-');
        const invalids = []
            for (let i = Number(start); i <= Number(end); i++){
                const str = String(i);
                if (str?.length %2===0){
                    if (str.slice(0, str?.length/2) === str.slice(str?.length/2)) {
                        invalids.push(i)
                    }
                }
            }
        return invalids
    })
    .flat()
    .reduce((a,b) => a+b, 0)

console.log(res)
