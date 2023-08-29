function solution(l, r) {
    const answer = [];
    for(let i = l; i <= r; i++) {
        if(i%5 !== 0) continue;
        const charI = String(i);
        if(![...charI].every(a => a==='5' || a==='0')) continue;
        answer.push(i);
    }
    return answer.length ? answer : [-1];
}