const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let h = Number(input[0]);
let m = Number(input[1]);

minute = m - 45;
let hour = h;

if (minute < 0) {
  minute += 60;
  hour--;

  if (hour === -1) {
    hour = 23;
  }
}

console.log(`${hour} ${minute}`);
