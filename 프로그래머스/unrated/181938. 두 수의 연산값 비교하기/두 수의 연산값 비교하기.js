function solution(a, b) {
    
    const atob = Number(String(a) + String(b));
    const ab2 = 2 * Number(a) * Number(b);
    
    return atob >= ab2 ? atob : ab2;
    
}