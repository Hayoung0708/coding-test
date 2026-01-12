const solution = (arr) => {
    for (i in arr) {
        for (j = 0; j < arr.length / 2; j++) {
            if (arr[i][j] !== arr[j][i]) return 0;
        }
    }
    
    return 1;
}