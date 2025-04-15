function solution(my_string) {
    return my_string.split('').sort().filter(char => !isNaN(char)).map(Number);
}