function solution(s) {
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    answer = "";
    
    for (i in s) {
        if (!isNaN(s[i])) {
            answer += s[i];
        }
        else {
            for (j in num) {
                if (s.substring(i).startsWith(num[j])) {
                    answer += j;
                    i += num[j].length;
                    break;
                }
            }
        }
    }
    
    return +answer;
}