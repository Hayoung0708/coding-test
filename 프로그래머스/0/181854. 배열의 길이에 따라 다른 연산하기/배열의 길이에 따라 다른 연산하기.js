const solution = (arr, n) =>
    isOdd(arr.length)
    ? arr.map((num,i) => !isOdd(i) ? n + num : num)
    : arr.map((num,i) => isOdd(i) ? n + num : num)

                       
const isOdd = (num) => num % 2 === 1