const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").slice(1).map((v) => v.split(" ").map(Number));
let arr = Array.from({ length: 100 }, () => Array(100).fill(0));

for (i = 0; i < input.length; i++) {
    let [x, y] = [input[i][0], input[i][1]];
    
    for (j = x; j < x + 10; j++) {
        for (k = y; k < y + 10; k++) {
            arr[j][k] = 1;
        }
    }
}

console.log(arr.flat().filter((v) => v === 1).length);