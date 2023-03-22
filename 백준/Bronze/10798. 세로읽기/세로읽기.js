const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const maxLength = Math.max(...input.map((el) => el.length));

let vertical = "";
for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    vertical += input[j][i] || "";
  }
}
console.log(vertical);
