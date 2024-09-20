//https://stackoverflow.com/questions/78954691/how-to-solve-lexicographically-smallest-permutation-using-adjacent-swaps

function solve(arr) {
    // For each index "i" find the index "j" that has the least value 
    //   in the partition that starts after index "i".
    let j = arr.length - 1;
    const next = Array(arr.length - 1);
    for (let i = arr.length - 2; i >= 0; i--) {
        next[i] = j;
        if (arr[i] <= arr[j]) j = i;
    }
    // Main algorithm
    let i = 0;
    while (i < arr.length - 1) {
        const j = next[i]; // arr[j] has least value at the right of index i
        // Perform rotation (swaps)
        const least = arr[j];
        for (let k = j - 1; k >= i; k--) {
            arr[k+1] = arr[k];
        }
        arr[i] = least;
        i = j;
    }
}

// Example run
const arr = [5, 4, 1, 3, 2];
solve(arr);
console.log(arr);

// To achieve a solution in 
// 𝑂
// (
// 𝑛
// )
// O(n), we can make use of a greedy algorithm where we selectively perform swaps to get the lexicographically smallest permutation. The idea is to go through the list once and make adjacent swaps if they are allowed (within the constraints) until we can't swap anymore.

// Approach:
// Iterate through the array and make swaps only when adjacent elements are out of order, but ensure that you don't swap the same element more than once (since you can only use each operation once as mentioned in the problem).
// Here is the O(n) JavaScript solution:

// javascript
// Copy code
// function getRefinedEntries(entries) {
//     let n = entries.length;
    
//     for (let i = 0; i < n - 1; i++) {
//         // Iterate through and perform a single adjacent swap if needed
//         for (let j = i; j < n - 1 && entries[j] > entries[j + 1]; j++) {
//             // Swap entries[j] and entries[j + 1] if out of order
//             [entries[j], entries[j + 1]] = [entries[j + 1], entries[j]];
//         }
//     }
    
//     return entries;
// }

// // Example usage:
// let entries = [5, 4, 1, 3, 2];
// console.log(getRefinedEntries(entries)); // Output: [1, 2, 3, 4, 5]
// Explanation:
// Single Pass Greedy Approach:

// We go through the array and for each index i, we check if entries[i] > entries[i + 1]. If so, we swap them.
// We don't swap the same elements repeatedly, so once an element has been placed correctly, we move on.
// This ensures that each element only moves as far as it needs to, leading to a linear pass.
// Time Complexity:

// The algorithm runs in 
// 𝑂
// (
// 𝑛
// )
// O(n) because we only perform swaps when necessary and never revisit an element once it is sorted in its place.
// Example:
// For entries = [5, 4, 1, 3, 2]:

// Start by swapping 5 and 4, then 4 and 1, then 1 with others until the list is sorted.
// This avoids unnecessary operations and achieves the smallest lexicographical permutation in one pass.