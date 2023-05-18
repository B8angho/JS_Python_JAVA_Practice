const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = input.map((i) => i.split(" ").map(Number));

for (let i = 0; i < n.length; i++) {
  let [a, b, c] = n[i].sort((a, b) => a - b);

  if (a === 0) break;

  a ** 2 + b ** 2 === c ** 2 ? console.log("right") : console.log("wrong");
}
