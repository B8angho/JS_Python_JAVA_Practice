const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

sol();

function sol() {
  let x = 0,
    y = 0;
  let a, b;
  for (let i = 0; i < 3; i++) {
    [a, b] = input[i].split(" ").map(Number);
    x ^= a;
    y ^= b;
  }
  console.log(x, y);
}
