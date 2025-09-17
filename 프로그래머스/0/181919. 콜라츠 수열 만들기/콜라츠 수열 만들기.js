const solution = (n) => {
    let i = n;
    let answer = [i];
    
    while (answer[answer.length - 1] !== 1) {
        i = (i % 2 === 0) ? i / 2 : 3 * i + 1;
        answer.push(i)
    }
    
    return answer;
}