const solution = (n) => {
    let answer = 1;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            answer++;
        }
    }
    return answer;
}