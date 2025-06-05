const solution = (num_list) => {
    let answer = [0, 0];
    for (i of num_list) {
        (i % 2 == 0) ? answer[0]++ : answer[1]++;
    }
    return answer;
}