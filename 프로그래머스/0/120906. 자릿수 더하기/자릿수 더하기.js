function solution(n) {
    let arr = n.toString().split('');
    let answer = 0;
    for (i of arr) {
        answer += parseInt(i);
    }
    return answer;
}