const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let nums = input.map((num) => +num);
sol(nums);

function sol(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], 1);
  }

  for (let i = 1; i <= 30; i++) {
    if (!map.has(i)) {
      console.log(i);
    }
  }
}
