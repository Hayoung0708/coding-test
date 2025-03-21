function solution(s) {
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(i in num) {
        s = s.replaceAll(num[i], i);
    }
    
    return +s;
}