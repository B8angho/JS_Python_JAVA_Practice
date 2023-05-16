function solution(A,B){
    var answer = 0;
    let arrA = A.sort((a, b) => b - a);
    let arrB = B.sort((a, b) => a - b);
    for(let i = 0; i < arrA.length; i++) {
        answer += arrA[i] * arrB[i];
    }

    return answer;
}