function solution(n_str) {
    let index = 0;
    
    for (i in n_str) {
        if (n_str[i] !== "0") {
            index = i;
            break;
        }
    }
    
    return n_str.substring(index);
}