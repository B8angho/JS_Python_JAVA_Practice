const fs = require("fs");
const { getPriority } = require("os");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let x = Number(input);
let groupCnt = 0;

const asc = [];
const desc = [];

while (x > 0) {
  groupCnt++;
  x = x - groupCnt;
}

for (let i = 0; i < groupCnt; i++) {
  asc.push(i + 1);
  desc.push(groupCnt - i);
}

if (groupCnt % 2 === 0) {
  console.log(`${asc[x + groupCnt - 1]}/${desc[x + groupCnt - 1]}`);
} else {
  console.log(`${desc[x + groupCnt - 1]}/${asc[x + groupCnt - 1]}`);
}
