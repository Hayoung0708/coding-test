const input = require("fs").readFileSync("/dev/stdin");
let num = +input;

for (i = 1; i <= +input; i++) {
    if (num - i <= 0) {
        if (i % 2 === 0) {
            console.log(num + "/" + (i + 1 - num));
        } else {
            console.log((i + 1 - num) + "/" + num);
        }
        break;
    }
    num -= i;
}