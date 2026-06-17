const solution = (n) => {
    let i = 1;
    
    while (true) {
        if (i * 6 % n === 0)
            return i;
        else
            i++;
    }
}