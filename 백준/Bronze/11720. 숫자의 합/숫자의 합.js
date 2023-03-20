const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input[0]);
const cases = input[1].split("");
let sum = 0;

for (let i = 0; i < num; i++) {
  sum = sum + Number(cases[i]);
}
console.log(sum);
