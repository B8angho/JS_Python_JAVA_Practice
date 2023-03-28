const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let sum = 0;

for (let i = 0; i < input.length; i++) {
  sum += Number(input[i]);
}

const sorted = input.sort((a, b) => a - b);
const medium = Math.floor(sorted.length / 2);
const avg = sum / input.length;
console.log(avg);
console.log(sorted[medium]);
