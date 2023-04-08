
function solution(d, budget) {
  let sortD = d.sort((a, b) => a - b);

  while (sortD.reduce((a, b) => a + b, 0) > budget) {
    sortD.pop();
  }
  return sortD.length;
}