function solution(s){
    let stack= [];
    
    for (i in s) {
        if (stack.length === 0) {
            stack.push(s[i]);
        }
        else {
            if (stack[stack.length - 1] === '(' && s[i] === ')') {
                stack.pop();
            }
            else {
                stack.push(s[i]);
            }
        }
    }
    
    return stack.length === 0;
}