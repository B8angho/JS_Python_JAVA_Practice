function solution(nums) {
    var answer = 0;
    return answer;
}function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}
