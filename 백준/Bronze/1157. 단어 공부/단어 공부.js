const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");

let input_map = new Map();
for (i of input) {
    input_map.set(
        i.toUpperCase(),
        input_map.has(i.toUpperCase()) ? input_map.get(i.toUpperCase()) + 1 : 1,
    );
}
input_map = [...input_map].sort((a, b) => b[1] - a[1]);

if (input_map.length === 1) {
    console.log(input[0].toUpperCase());
}
else {
    console.log(input_map[0][1] === input_map[1][1] ? "?" : input_map[0][0]);
}