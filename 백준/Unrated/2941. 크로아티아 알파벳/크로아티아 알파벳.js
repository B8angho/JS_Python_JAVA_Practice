let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function solution(input) {
  for (let alphabet of croatia) {
    input = input.split(alphabet).join("C");
  }
  return input.length;
}
console.log(solution(input));
