const solution = (my_string, index_list) => {
    let answer = '';
    
    index_list.map((i) => answer += my_string[i])
    
    return answer;
}