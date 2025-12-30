const solution = (start_num, end_num) => 
    Array.from({length: start_num - end_num + 1}, (v,i) => start_num - i)