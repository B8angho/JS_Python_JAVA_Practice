const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const month = input[0];
const day = input[1];

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
console.log(week[new Date(`2007-${month}-${day}`).getDay()]);
