const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let inputNum = Number(input);

let answer = 0;

for (let i = 1; i <= inputNum; i++) {
  answer += i;
}
console.log(answer);
