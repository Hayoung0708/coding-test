function solution(s) {
    let answer = "";
    for (i in s) {
        if (i == 0 || i != 0 && s[i-1] == ' ') {
            answer += s[i].toUpperCase();
        }
        else {
            answer += s[i].toLowerCase();
        }
    }
    return answer;
}