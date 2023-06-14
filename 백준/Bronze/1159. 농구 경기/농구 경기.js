const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
input.sort();

let obj = {};
let result = "";

for (let i = 0; i < input.length; i++) {
  if (obj[input[i][0]]) {
    obj[input[i][0]]++;
  } else {
    obj[input[i][0]] = 1;
  }
}
for (let i in obj) {
  if (obj[i] >= 5) result += i;
}

console.log(result.length === 0 ? "PREDAJA" : result);
