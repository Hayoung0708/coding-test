function solution(array, height) {
    let answer = 0;
    for (i of array) {
        if (i > height) {
            answer++;
        }
    }
    return answer;
}