const input = require("fs").readFileSync("/dev/stdin").toString().split("");

const desc = input.sort((a, b) => b - a).join("");
console.log(desc);
