const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const tc = parseInt(input.shift());

for (let i = 0; i < tc; i++) {
  const arr = input[i].split(" ");
  const H = +arr[0];
  const N = +arr[2];
  if (N % H === 0) {
    fl = H;
    Ho = N / H;
  } else if (N % H !== 0) {
    fl = N % H;
    Ho = Math.floor(N / H) + 1;
  }
  if (Ho < 10) {
    Ho = `0${Ho}`;
  }
  console.log(`${fl}${Ho}`);
}
