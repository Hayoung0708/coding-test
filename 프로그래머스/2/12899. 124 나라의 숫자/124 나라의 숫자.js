function solution(n) {
    var a = n, b; //a = 몫, b = 나머지
    var answer='';
    while (a > 0) {
        b = a%3;
        a = (a-b)/3;
        if (b == 1) answer = 1 + answer;
        else if (b == 2) answer = 2 + answer;
        else {
                answer = 4 + answer;
                a--;
             }
    }
    return answer;
}