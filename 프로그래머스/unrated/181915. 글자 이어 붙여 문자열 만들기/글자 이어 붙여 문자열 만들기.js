function solution(my_string, index_list) {
    let answer = '';
    for(let i of index_list) {
        answer += my_string.slice(i, i+1);
    }
    return answer;
}