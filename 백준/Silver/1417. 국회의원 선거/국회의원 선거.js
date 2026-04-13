const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);
const [dasom, others] = [input[1], input.slice(2)];
const max = Math.max(...others);

if (input[1] > max) {
    return console.log(0);
}

let count = 0;
for (i = input[1]; i <= max + 1; i++) {
    const gap = others.filter((v) => v >= i).map((v) => v - i).reduce((sum, v) => sum += v + 1, 0);
    if (i - dasom >= gap) {
        return console.log(i - dasom);
    }
}