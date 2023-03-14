const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = input[0];
const score = input[1].split(" ");

const max = Math.max(...score);
let sum = 0;

for (let i = 0; i < num; i++) {
  sum += (score[i] / max) * 100;
}
console.log(sum / num);
