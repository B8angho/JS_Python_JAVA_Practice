const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const grid = Array.from(Array(100), () => new Array(100).fill(false));

let area = 0;
for (let i = 0; i < input.length; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  for (let r = x; r < x + 10; r++) {
    for (let c = y; c < y + 10; c++) {
      if (!grid[r][c]) {
        grid[r][c] = true;
        area++;
      }
    }
  }
}

console.log(area);
