const solution = (arr, idx) => {
    const answer = arr.slice(idx).indexOf(1)
    return answer === -1 ? -1 : answer + idx 
}