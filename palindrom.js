function isPalindrome(x) {
    // Convert the number to a string
    const strX = x.toString();
    
    // Compare the string with its reverse
    return strX === strX.split('').reverse().join('');
}

// Example usage
const x1 = 121;
console.log(isPalindrome(x1));  // Output: true

const x2 = -121;
console.log(isPalindrome(x2));  // Output: false

const x3 = 10;
console.log(isPalindrome(x3));  // Output: false
