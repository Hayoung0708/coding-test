const solution = (s1, s2) => {
    let answer = 0;
    for (i of s1) {
        for (j of s2) {
            if (i == j) {
                answer++;
                break;
            }
        }
    }
    return answer;
}