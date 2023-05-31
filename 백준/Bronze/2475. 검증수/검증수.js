const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const N = input.map((el) => Number(el) * Number(el)).reduce((a, c) => a + c);

console.log(N % 10);
