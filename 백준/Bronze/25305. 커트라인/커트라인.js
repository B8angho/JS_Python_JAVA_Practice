const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ");

const x = input[1].split(" ");

x.sort((a, b) => b - a);
console.log(x[k - 1]);
