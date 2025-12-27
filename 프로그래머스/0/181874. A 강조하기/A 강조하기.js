const solution = (myString) =>
    myString.split('').map((i) => i === 'a' ? "A" : i !== "A" ? i.toLowerCase() : i).join('')