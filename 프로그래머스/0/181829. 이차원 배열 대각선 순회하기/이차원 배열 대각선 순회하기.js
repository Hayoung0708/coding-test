const solution = (board, k) => {
    let sum = 0;
    
    for (i in board)
        for (j in board[i])
            if (+i + +j <= k)
                sum += board[i][j];
    
    return sum;
}