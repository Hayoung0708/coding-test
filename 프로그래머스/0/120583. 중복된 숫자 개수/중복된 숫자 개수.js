function solution(array, n) {
    var answer = 0;
    for (i of array) {
        if (i === n) {
            answer++;
        }
    }
    return answer;
}