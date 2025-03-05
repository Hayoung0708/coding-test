function solution(A,B){
    let answer = 0;
    A.sort((a,b) => a-b);
    B.sort((a,b) => b-a);
    for (i in A) {
        answer += A[i] * B[i];
    }
    return answer;
}