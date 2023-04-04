function solution(my_string) {
    let arr = [...my_string];
    const set = new Set(arr);
    const answer = [...set];
    return answer.join("");
}