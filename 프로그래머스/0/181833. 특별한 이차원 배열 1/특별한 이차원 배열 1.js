const solution = (n) => {
    let answer = [];
    
    for (i = 0; i < n; i++) {
        let temp = Array.from({ length: n }, (v, j) => i === j ? 1 : 0);
        answer.push(temp);
    }
    
    return answer;
}