function solution(maps) {
  const lenY = maps.length;
  const lenX = maps[0].length;

  const goalX = lenX - 1; // ex) 0~4 (5*5)
  const goalY = lenY - 1;

  const dX = [0, 0, -1, 1]; // 상하좌우
  const dY = [1, -1, 0, 0];

  const queue = [];
  queue.push([0, 0, 1]); // 좌측 상단에 위치 한 것을 한 칸 이동 한 것으로 +1

  while (queue.length) {
    const [curY, curX, move] = queue.shift();
    if (curY === goalY && curX === goalX) return move; // 도착 결과

    // 상,하,좌,우 반복
    for (let i = 0; i < 4; i++) {
      const ny = curY + dY[i];
      const nx = curX + dX[i];

      if (ny >= 0 && ny < lenY && nx >= 0 && nx < lenX && maps[ny][nx] === 1) {
        queue.push([ny, nx, move + 1]);
        maps[ny][nx] = 0;
      }
    }
  }
  return -1;
}