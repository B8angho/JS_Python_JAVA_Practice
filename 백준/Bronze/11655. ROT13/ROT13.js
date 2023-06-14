const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let words = input[0];
let answer = "";

for (let i = 0; i < words.length; i++) {
  if ("A" <= words[i] && words[i] <= "Z") {
    let nums = words.charCodeAt(i) + 13;
    if (nums > 90) {
      nums -= 26;
    }
    answer += String.fromCharCode(nums);
  } else if ("a" <= words[i] && words[i] <= "z") {
    let nums = words.charCodeAt(i) + 13;
    if (nums > 122) {
      nums -= 26;
    }
    answer += String.fromCharCode(nums);
  } else {
    answer += words[i];
  }
}

console.log(answer);
