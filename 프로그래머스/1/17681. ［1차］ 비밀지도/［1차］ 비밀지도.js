function solution(n, arr1, arr2) {
    let a1 = arr1.map(i => i.toString(2).padStart(n, '0'));
    let a2 = arr2.map(i => i.toString(2).padStart(n, '0'));
    let answer = [];
    
    for (let i = 0; i < n; i++) {
        let tem = "";
        for (let j = 0; j < n; j++) {
            parseInt(a1[i][j]) || parseInt(a2[i][j]) ? tem += '#' : tem += ' ';
        }
        answer.push(tem);
    }
    return answer;
}