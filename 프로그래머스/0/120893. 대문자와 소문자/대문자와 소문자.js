const solution = (my_string) => {
    let answer = '';
    
    for (i of my_string) {
        answer += i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase();
    }
    
    return answer;
}