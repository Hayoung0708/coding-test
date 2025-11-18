const solution = (binomial) => {
    let [a, operator, b] = binomial.split(' ');
    
    if (operator === '+') return +a + +b;
    if (operator === '-') return +a - +b;
    if (operator === '*') return +a * +b;
}