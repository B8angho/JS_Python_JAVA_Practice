const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift());

const xy = input.filter((v, i) => i >= 0).map((v) => v.split(" "));

let answer = "";
xy.sort((a, b) => {
  return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
}).forEach((arr) => {
  answer += `${arr[0]} ${arr[1]}\n`;
});

console.log(answer);
