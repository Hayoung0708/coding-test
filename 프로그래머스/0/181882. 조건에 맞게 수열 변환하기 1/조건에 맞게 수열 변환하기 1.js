const solution = (arr) => arr.map((i) => {
    if (i % 2 === 0 && i >= 50) return i / 2;
    if (i % 2 === 1 && i < 50) return i * 2
    return i
})