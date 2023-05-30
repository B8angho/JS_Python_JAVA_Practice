const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const N = input[0];
const stack = new Array();

// 3
for (let i = 1; i <= N; i++) {
  if (input[i] === 0) {
    stack.pop();
  } else {
    stack.push(input[i]);
  }
}

// 4
console.log(stack.reduce((acc, cur) => acc + cur, 0));
