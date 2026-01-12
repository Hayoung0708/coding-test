const solution = (arr) => {
    for (i in arr) {
        for (j in arr[i]) {
            if (arr[i][j] !== arr[j][i]) return 0;
        }
    }
    
    return 1;
}