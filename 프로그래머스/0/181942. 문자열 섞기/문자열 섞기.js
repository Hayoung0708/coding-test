const solution = (str1, str2) => {
    let answer = '';
    let list1 = str1.split('');
    let list2 = str2.split('');
    
    for(let i = 0; i < str1.length * 2; i++) {
        if (i % 2 === 0)
            answer += list1.shift();
        else
            answer += list2.shift();
    }
    
    return answer;
}