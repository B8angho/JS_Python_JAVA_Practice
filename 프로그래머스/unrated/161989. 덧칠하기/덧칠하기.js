function solution(n, m, section) {
    let answer = 0;
    let painted = 0;
        
    for(let i of section) {
        if(i < painted) {
            continue;
        }
        painted=i+m;
        answer++;
    }
    return answer;
}