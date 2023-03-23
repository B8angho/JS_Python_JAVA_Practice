const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const num = parseInt(input[i]);
  if (num === -1) {
    break;
  } else {
    const divisor = [];
    let sum = 0;
    for (let j = 1; j <= num / 2; j++) {
      if (num % j === 0) {
        divisor.push(j);
      }
    }
    divisor.sort((a, b) => a - b);
    for (let j = 0; j < divisor.length; j++) {
      sum += divisor[j];
    }
    if (sum === num) {
      console.log(`${num} = ${divisor.join(" + ")}`);
    } else {
      console.log(`${num} is NOT perfect.`);
    }
  }
}
