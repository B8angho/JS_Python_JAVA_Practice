function solution(cookie) {
  let len = cookie.length;
  let answer = 0;

  for (let i = 0; i < len - 1; i++) {
    let left = i;
    let right = i + 1;

    let lsum = cookie[left];
    let rsum = cookie[right];

    while (true) {
      // 첫 번째 조건
      if (lsum === rsum && answer < lsum) {
        answer = lsum;
      }
      // 두 번째 조건
      else if (lsum <= rsum && left !== 0) {
        // left의 범위를 1 줄이고, 해당 위치의 개수를 누적
        lsum += cookie[--left];
      }
      // 세 번째 조건
      else if (rsum <= lsum && right !== len - 1) {
        // right의 범위를 1 늘리고, 해당 위치의 개수를 누적
        rsum += cookie[++right];
      }
      // else : 둘 중 하나의 구간이 한계치에 도달함
      else {
        break;
      }
    }
  }
  return answer;
}