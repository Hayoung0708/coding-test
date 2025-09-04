function solution(numbers) {
    let answer = -1000000000;
    
    for (i = 0; i < numbers.length - 1; i++) {
        for (j = i + 1; j < numbers.length; j++) {
            answer = Math.max(answer, numbers[i] * numbers[j]);
            console.log(numbers[i] + " * " + numbers[j] + " = " + numbers[i] * numbers[j]);
        }
    }

    return answer;
}