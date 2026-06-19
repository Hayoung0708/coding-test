const solution = (date1, date2) => {
    for (i in date1) {
        if (date1[i] < date2[i])
            return 1;
        if (date1[i] > date2[i])
            return 0;
    }
    
    return 0;
}