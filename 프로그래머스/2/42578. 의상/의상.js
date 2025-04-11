function solution(clothes) {
    const Clothes = {};
    let answer = 1;
    
    for (let value of clothes) {
        value[1] in Clothes ? Clothes[value[1]]++ : Clothes[value[1]] = 1;
    }
    
    for (let key in Clothes) {
        answer *= (Clothes[key] + 1);
    }
    
    return answer - 1;
}