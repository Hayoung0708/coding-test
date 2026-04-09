const [A, B, C] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);