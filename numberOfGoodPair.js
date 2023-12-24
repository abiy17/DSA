function numIdenticalPairs(nums) {
    let goodPairs = 0;
    const numFrequency = {};

    for (const num of nums) {
        if (numFrequency[num]) {
            // If the number has been seen before, increment goodPairs by the current frequency
            goodPairs += numFrequency[num];
            // Increment the frequency for the current number
            numFrequency[num]++;
        } else {
            // If the number is seen for the first time, initialize its frequency to 1
            numFrequency[num] = 1;
        }
    }

    return goodPairs;
}

// Example usage
const nums1 = [1, 2, 3, 1, 1, 3];
console.log(numIdenticalPairs(nums1));  // Output: 4

const nums2 = [1, 1, 1, 1];
console.log(numIdenticalPairs(nums2));  // Output: 6

const nums3 = [1, 2, 3];
console.log(numIdenticalPairs(nums3));  // Output: 0
