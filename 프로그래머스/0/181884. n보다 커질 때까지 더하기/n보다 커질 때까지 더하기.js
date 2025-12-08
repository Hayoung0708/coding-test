const solution = (numbers, n) => {
    let answer = 0;
    
    for (v of numbers) {
        answer += v;
        if(n < answer)
            return answer;
    }
    
}