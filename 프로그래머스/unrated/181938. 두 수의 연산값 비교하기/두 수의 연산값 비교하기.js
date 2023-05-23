function solution(a, b) {
    
    const atob = String(a) + String(b);
    const ab2 = 2 * Number(a) * Number(b);
    
    return atob >= ab2 ? Number(atob) : ab2;
    
}