function solution(my_string) {
    let reversed = my_string.split("").reverse().join("");
    // let reversed = [...my_string].reverse().join("");
    return reversed;
}