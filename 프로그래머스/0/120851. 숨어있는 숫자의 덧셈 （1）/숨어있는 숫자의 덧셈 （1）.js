const solution = (my_string) => {
    let answer = 0;
    
    for (i of my_string) {
        if (!isNaN(i)) {
            answer += +i;
        }
    } 
    
    return answer;
}