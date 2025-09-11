const solution = (my_string, is_suffix) => 
    my_string.slice(my_string.length - is_suffix.length, my_string.length + 1) === is_suffix ? 1 : 0