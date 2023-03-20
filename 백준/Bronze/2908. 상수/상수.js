const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [a, b] = input.map((x) => [...x].reverse().join(""));
console.log(a > b ? a : b);
