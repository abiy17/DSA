function mergeAlternately(word1, word2) {
    const merged = [];
    const len1 = word1.length;
    const len2 = word2.length;

    let i = 0;
    while (i < len1 || i < len2) {
        if (i < len1) {
            merged.push(word1[i]);
        }
        if (i < len2) {
            merged.push(word2[i]);
        }
        i++;
    }

    return merged.join('');
}

// Example usage
const word1 = "abc";
const word2 = "pqr";
console.log(mergeAlternately(word1, word2));  // Output: "apbqcr"

const word3 = "ab";
const word4 = "pqrs";
console.log(mergeAlternately(word3, word4));  // Output: "apbqrs"

const word5 = "abcd";
const word6 = "pq";
console.log(mergeAlternately(word5, word6));  // Output: "apbqcd"
