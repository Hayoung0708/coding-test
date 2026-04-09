const [num1, num2] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const num2_split = num2.toString().split('');

console.log(num1 * num2_split[2]);
console.log(num1 * num2_split[1]);
console.log(num1 * num2_split[0]);
console.log(num1 * num2);