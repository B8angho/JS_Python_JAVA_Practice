function solution(my_str, n) {
    let answer = my_str.split("");
    let ans = [];
    
    while (answer.length > 0) {
        ans.push(answer.splice(0, n).join(""));
    }
    return ans;
}