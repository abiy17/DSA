function fizzBuzz(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }

    return result;
}

// Example usage
const n1 = 3;
const output1 = fizzBuzz(n1);
console.log(output1);

const n2 = 5;
const output2 = fizzBuzz(n2);
console.log(output2);
