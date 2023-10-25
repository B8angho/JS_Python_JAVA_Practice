function solution(maps) {
  const lenY = maps.length;
  const lenX = maps[0].length;

  const goalX = lenX - 1; // ex) 0~4 (5*5)
  const goalY = lenY - 1;

  const dX = [0, 0, -1, 1]; // 상하좌우
  const dY = [1, -1, 0, 0];

  // 최적화 추가1. 이미 방문한 곳을 '0'으로 표시. 재방문 방지.
  const visited = Array(lenY)
    .fill(0)
    .map(() => Array(lenX).fill(false));

  const queue = [];
  queue.push([0, 0, 1]); // 좌측 상단에 위치 한 것을 한 칸 이동 한 것으로 +1

  while (queue.length) {
    const [curY, curX, move] = queue.shift();
    if (curY === goalY && curX === goalX) return move; // 도착 결과 반환. 검색을 계속X 처리시간 절약, 효율적

    // 상,하,좌,우 반복
    for (let i = 0; i < 4; i++) {
      const ny = curY + dY[i]; // 새로운 좌표
      const nx = curX + dX[i];

      // 최적화 추가2. !visited[ny][nx]
      if (ny >= 0 && ny < lenY && nx >= 0 && nx < lenX && maps[ny][nx] === 1 && !visited[ny][nx]) {
        queue.push([ny, nx, move + 1]);
        maps[ny][nx] = 0;
      }
    }
  }
  return -1;
}
