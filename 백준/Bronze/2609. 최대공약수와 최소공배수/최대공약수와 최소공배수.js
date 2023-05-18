const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const [a, b] = input.split(" ").map((v) => +v);

let i = a;
let j = b;

while (i % j !== 0) {
  let n = i % j;
  if (n !== 0) {
    i = j;
    j = n;
  }
}
console.log(j);
console.log((a * b) / j);
