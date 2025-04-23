function solution(array, commands) {
    let answer = []
    for (let c of commands) {
        let subArr = array.slice(c[0]-1, c[1]).sort((a, b) => a - b);
        answer.push(subArr[c[2]-1]);
    }
    
    return answer;
}