const solution = (num_list) => {
    let mul = 1, add = 0;
    
    num_list.map((i) => { mul *= i; add += i; });
    
    return mul < add**2 ? 1 : 0;
}