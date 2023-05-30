const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num = String(input[0] * input[1] * input[2]);

for (let i = 0; i <= 9; i++) {
  let cnt = 0;

  for (let j = 0; j < num.length; j++) {
    if (Number(num[j])===i) cnt++;
  }

  console.log(cnt);
}


