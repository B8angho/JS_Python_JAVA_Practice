const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const numtoName = new Map();
const nametoNum = new Map();

for (let i = 0; i < N; i++) {
  numtoName.set(i + 1, input[i]);
  nametoNum.set(input[i], i + 1);
}

const quiz = input.slice(N, input.length);
let answer = "";
quiz.forEach((v) => {
  if (isNaN(v)) {
    answer += nametoNum.get(v) + "\n";
  } else {
    answer += numtoName.get(+v) + "\n";
  }
});

console.log(answer.trim());
