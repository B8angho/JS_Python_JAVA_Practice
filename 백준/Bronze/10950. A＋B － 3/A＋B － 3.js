const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const caseNum = input[0];

let tmp = [];
for (let i=1; i<=caseNum; i++) {
    tmp = input[i].split(" ").map(Number);
    
    console.log(tmp[0]+tmp[1]);
}