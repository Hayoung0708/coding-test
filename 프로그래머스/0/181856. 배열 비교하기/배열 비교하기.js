const solution = (arr1, arr2) => {
    if (arr1.length > arr2.length)
        return 1;
    if (arr1.length < arr2.length)
        return -1;
    
    const arr1_sum = arr1.reduce((sum, i) => sum += i, 0);
    const arr2_sum = arr2.reduce((sum, i) => sum += i, 0);
    if (arr1_sum > arr2_sum)
        return 1;
    if (arr2_sum > arr1_sum)
        return -1;
    return 0;
}