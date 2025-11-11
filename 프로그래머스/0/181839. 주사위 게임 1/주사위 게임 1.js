const solution = (a, b) => {
    if(isOdd(a+b)) {
        return 2 * (a + b);
    }
    if (isOdd(a)) {
        return a**2 + b**2;
    }
    return Math.abs(a - b);
}

const isOdd = (n) => n % 2 === 1