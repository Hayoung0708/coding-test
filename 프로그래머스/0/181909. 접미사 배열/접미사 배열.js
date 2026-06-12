const solution = (my_string) => {
    let str_list = [...my_string].reduce((list, v, i) => [my_string.slice(i), ...list],[]);
    return str_list.sort();
}