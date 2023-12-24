function smallestMultipleOfTwoAndN(n) {
    let multiple = 2;  // Initialize with the smallest even number

    while (multiple % n !== 0) {
        multiple += 2;  // Increment by 2 to ensure it's even
    }

    return multiple;
}

// Example usage
const n1 = 5;
console.log(smallestMultipleOfTwoAndN(n1));  // Output: 10

const n2 = 6;
console.log(smallestMultipleOfTwoAndN(n2));  // Output: 6
