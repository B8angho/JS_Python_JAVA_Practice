let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let firstVal = 666;

while (true) {
  if (firstVal.toString().includes("666")) {
    input -= 1;
    if (input == 0) break;
  }
  firstVal += 1;
}
console.log(firstVal);
