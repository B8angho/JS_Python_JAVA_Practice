const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const counts = new Array(26).fill(0);
input.forEach((v) => counts[alphabet.indexOf(v)]++);
console.log(counts.join(" "));
