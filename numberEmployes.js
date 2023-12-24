function numEmployees(hours, target) {
    let count = 0;

    for (const workedHours of hours) {
        if (workedHours >= target) {
            count++;
        }
    }

    return count;
}

// Example usage
const hours1 = [0, 1, 2, 3, 4];
const target1 = 2;
console.log(numEmployees(hours1, target1));  // Output: 3

const hours2 = [5, 1, 4, 2, 2];
const target2 = 6;
console.log(numEmployees(hours2, target2));  // Output: 0
