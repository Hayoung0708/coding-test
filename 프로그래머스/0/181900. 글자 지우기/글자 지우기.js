const solution = (my_string, indices) => {
    let indices_set = new Set(indices);
    
    return my_string.split("").reduce((answer, v, i) => indices_set.has(i) ? answer : answer += v, "");
}