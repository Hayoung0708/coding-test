const solution = (num, k) => {
    let num_list = (num + "").split("");
    
    for (let i = 0; i < num_list.length; i++) {
        if (k == num_list[i])
            return i + 1;
    }
    
    return -1;
}