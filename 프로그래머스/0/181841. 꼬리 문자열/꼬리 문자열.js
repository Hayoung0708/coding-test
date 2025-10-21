const solution = (str_list, ex) =>
str_list.reduce((answer, str) => !str.includes(ex) ? answer += str : answer, "")