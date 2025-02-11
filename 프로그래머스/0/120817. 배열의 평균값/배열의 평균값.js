function solution(numbers) {
    return numbers.reduce((sum, i) => sum + i, 0) / numbers.length;
}