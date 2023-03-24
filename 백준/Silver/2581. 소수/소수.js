const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [min, max] = input.map(Number);
let arr = [];

const isPrime = (n) => {
  if (n == 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

for (i = min; i <= max; i++) {
  if (isPrime(i)) {
    arr.push(i);
  }
}

let sum = 0;

for (i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(arr.length === 0 ? -1 : `${sum}\n${arr[0]}`);
