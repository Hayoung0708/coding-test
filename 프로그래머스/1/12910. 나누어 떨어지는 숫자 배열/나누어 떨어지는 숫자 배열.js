function solution(arr, divisor) {
    var answer = [];
    for (i of arr) {
        if (i % divisor == 0) {
            answer.push(i);
        }
    }
    return answer[0] ? answer.sort((a, b) => a - b) : [-1];
}