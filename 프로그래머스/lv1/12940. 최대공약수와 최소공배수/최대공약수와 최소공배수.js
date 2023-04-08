function solution(n, m) {
    let g = 0;
    let l = 0;
    
    let num = n > m ? n : m;
    
    for (let i = 1; i <= num; i++) {
        if(n % i === 0 && m % i === 0) {
            g = i;
        }
    }
    l = n * m / g;
    answer = [g, l];
    return answer;
}