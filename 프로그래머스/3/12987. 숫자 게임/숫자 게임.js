function solution(A, B) {
    let ans = 0;

    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    let i = 0;
    
    return B.reduce((pre, cur) => {
        if(cur > A[i]) {
            i++;
            pre++;
        }
        return pre;
    }, 0);
}
