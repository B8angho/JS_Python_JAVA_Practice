function solution(array, commands) {
  let answer = [];

  for (const n of commands) {
    const [i, j, k] = n;
    answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
  }
  return answer;
}