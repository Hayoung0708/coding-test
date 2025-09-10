const solution = (array) => {
    let answer = [0, 0];
    
    array.map((v, i) => {
        if (v > answer[0]) answer = [v, i]
    });
    
    return answer;
}