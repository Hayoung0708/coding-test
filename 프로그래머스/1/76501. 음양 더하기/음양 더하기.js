function solution(absolutes, signs) {
    var answer = 0;
    for (i in absolutes) {
        signs[i]? answer += absolutes[i] : answer -= absolutes[i];
    }
    return answer;
}