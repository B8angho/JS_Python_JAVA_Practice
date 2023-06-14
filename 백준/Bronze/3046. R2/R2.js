const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const R2 = 2 * Number(input[1]) - Number(input[0]);
console.log(R2);
