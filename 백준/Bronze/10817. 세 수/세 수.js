const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const sortedNum = input.sort((a, b) => a - b);
console.log(sortedNum[1]);
