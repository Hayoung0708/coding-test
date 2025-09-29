const solution = (num_list) => {
    let mul = 1, sum = 0;
    
    num_list.map((i) => { mul *= i; sum += i; });
    
    return mul < sum**2 ? 1 : 0;
}