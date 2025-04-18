function solution(progresses, speeds) {
    let answer = [];
    
    while (progresses.length > 0) {
        let complete = 0;
        
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }

        for (let i = 0; i < progresses.length; i++) {
            if (progresses[i] < 100) {
                break;
            }
            progresses.shift();
            speeds.shift();
            i--;
            complete++;
        }
        
        if (complete !== 0) {
            answer.push(complete);
        }
    }
    
    return answer;
}