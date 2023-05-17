function solution(n, arr1, arr2) {
    let answer = [];
    
    for(let i = 0; i < n; i++) {
        const binary = (arr1[i] | arr2[i]).toString(2);
        let line = [];
        for(let j = binary.length - n; j < binary.length; j++) {
            if(binary[j] === '1') {
                line.push('#');
            } else{
                line.push(' ');
            }
        }
        answer.push(line.join(''));
    }
    return answer;
}