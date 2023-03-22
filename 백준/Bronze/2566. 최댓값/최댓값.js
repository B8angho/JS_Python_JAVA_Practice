const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let flatArr = input.flat();

let max = flatArr.slice().sort((a, b) => b - a)[0];
console.log(max);

const maxNumIdx = flatArr.indexOf(max);
const row = Math.floor(maxNumIdx / 9) + 1;
const col = (maxNumIdx % 9) + 1;
console.log(row, col);
