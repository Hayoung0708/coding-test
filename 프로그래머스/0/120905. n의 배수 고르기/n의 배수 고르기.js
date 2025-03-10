function solution(n, numlist) {
    var answer = [];
    for (i of numlist) {
        if (i % n == 0) {
            answer.push(i);
        }
    }
    return answer;
}