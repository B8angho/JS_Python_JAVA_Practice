function solution(array) {
    let answer = [Math.max(...array), array.indexOf(Math.max(...array))];
    
    
    return answer;
}