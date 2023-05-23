function solution(numbers) {
    var answer = [];
    let twoSum = 0;
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            twoSum = numbers[i] + numbers[j];
            answer.push(twoSum);
        }
    }
    let answer1 = [...new Set(answer)];
    return answer1.sort((a, b) => a - b);
}