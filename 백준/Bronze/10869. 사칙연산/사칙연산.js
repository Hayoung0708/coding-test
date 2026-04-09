const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ');
console.log(+A + +B);
console.log(+A - +B);
console.log(+A * +B);
console.log(Math.floor(+A / +B));
console.log(+A % +B);