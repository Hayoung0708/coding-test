const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ');
console.log(+A - +B);