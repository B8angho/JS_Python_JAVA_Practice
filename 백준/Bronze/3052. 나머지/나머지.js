const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const userNum = [];

input.forEach((x) => {
  const num = x % 42;

  if (userNum.indexOf(num) === -1) {
    userNum.push(num);
  }
});

console.log(userNum.length);

/* 
Set 객체를 이용한 풀이
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
	
const count = new Set(input.map(x => x % 42)).size;
    
console.log(count); */
