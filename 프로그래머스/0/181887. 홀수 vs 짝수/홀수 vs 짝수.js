const solution = (num_list) => Math.max(
    ...num_list.reduce(([odd, even], v, i) => i % 2 === 1 ? [odd + v, even] : [odd, even + v], [0,0])
)