const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let num = Number(input);
let sum = 0;
let i = 0;

while (true) {
  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);
  i++;
  if (+input === num) {
    break;
  }
}
console.log(i);
