const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const reversedInput = input.split("").reverse().join("");
console.log(input === reversedInput ? 1 : 0);
