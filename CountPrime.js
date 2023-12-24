function countPrimes(n) {
    if (n <= 2) {
        return 0;
    }

    const isPrime = new Array(n).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime.filter((value) => value).length;
}

// Example usage
const n1 = 10;
console.log(countPrimes(n1));  // Output: 4

const n2 = 0;
console.log(countPrimes(n2));  // Output: 0

const n3 = 1;
console.log(countPrimes(n3));  // Output: 0
