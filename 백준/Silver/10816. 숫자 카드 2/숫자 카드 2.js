const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = input[0];
let N_cards = input[1].split(" ");
let M = input[2];
let M_cards = input[3].split(" ");

let ans = new Object();
let arr = new Array();

for (let i = 0; i < N; i++) {
  N_cards[i] = parseInt(N_cards[i]);
  ans[N_cards[i]] ? ans[N_cards[i]]++ : (ans[N_cards[i]] = 1);
}

for (let i = 0; i < M; i++) {
  M_cards[i] = parseInt(M_cards[i]);
  ans[M_cards[i]] ? arr.push(ans[M_cards[i]]) : arr.push(0);
}

console.log(arr.join(" "));
