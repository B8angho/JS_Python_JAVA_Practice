const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const nums = input.map((el) => el.split(" ").map((el) => +el));

nums.forEach((el) => {
  if (el[1] % el[0] === 0) {
    console.log("factor");
  } else if (el[0] % el[1] === 0) {
    console.log("multiple");
  } else if (el[0] == el[1]) {
  } else {
    console.log("neither");
  }
});
