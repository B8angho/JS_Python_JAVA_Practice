const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let reverseStr = input[i].split("").reverse().join("");
  if (input[i] === "0") break;
  console.log(input[i] === reverseStr ? "yes" : "no");
}
