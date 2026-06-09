const solution = (order) => {
    return order.toString().split('').reduce((sum, v) => v !== "0" && v % 3 === 0 ? sum += 1 : sum, 0);
}