const solution = (my_string, m, c) => {
    return my_string.split('').reduce((result, v, i) => i % m === c - 1 ? result += v : result, "");
}