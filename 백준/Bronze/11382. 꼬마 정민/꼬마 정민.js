const [A, B, C] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
console.log(A + B + C);