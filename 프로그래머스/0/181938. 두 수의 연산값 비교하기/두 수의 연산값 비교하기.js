function solution(a, b) {
    return (a.toString() + b) > (2 * a * b) ?
        parseInt(a.toString() + b):
        2 * a * b;
}