function solution(n) {
    var answer = 1;
    for (i = 1; i < n; i++) {
        if (n % i === 0) {
            answer++;
        }
    }
    return answer;
}