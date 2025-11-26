const solution = (num_list) => num_list.length > 10
    ? num_list.reduce((sum, i) => sum += i,0)
    : num_list.reduce((mul, i) => mul *= i,1)