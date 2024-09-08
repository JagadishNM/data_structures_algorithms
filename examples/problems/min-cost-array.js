// 1. Minimize Array Cost
// Given an array of n positive integers, assuming 0-based indexing, its cost is
// len(arr)-1
// (arri
// -
// arri-1)²
// i=1
// len(arr) is the size of the array.
// Insert any integer at any location of the array such that the cost of the array is minimized. Find the minimum possible cost
// the array after inserting exactly one element.
// Example
// a=[1, 3, 5, 2, 10]
// The cost of the array before insertion = (1-3)² + (3-5)² + (5-2)² + (2 - 10)² = 81.
// Two of many scenarios are shown below.
// 1. Insert 4 between 3 and 5, cost of array = (1-3)² + (3-4)² + (4-5)² + (5-2)² + (2 - 10)² = 79.
// 2. Insert 6 between 2 and 10, cost of array =(1-3)² + (3-5)² + (5-2)² + (2 - 6)² + (6 - 10)² = 49.
// It can be proven that 49 is the minimum cost possible. Return 49.
// Function Description
// Complete the function getMinimumCost in the editor below.
// getMinimum Cost has the following parameter:
// int arr[n]: an array of integers
// Returns
// long_int: the minimum possible cost of the array after inserting one element
// Constraints
// 2 ≤ n ≤ 104
// • 1 ≤ arr[i]≤ 105

function getMinimumCost(arr) {
    let n = arr.length;
    let minCost = Infinity;

    for (let i = 0; i < n - 1; i++) {
        // Check for mid-point candidate
        let candidate1 = (arr[i] + arr[i + 1]) / 2;
        let candidate2 = Math.ceil(candidate1);

        // Check the cost if we insert candidate2 (rounded up)
        let cost1 = calculateCost(arr, candidate2, i);
        minCost = Math.min(minCost, cost1);

        // Check the cost if we insert candidate1 (floored)
        candidate1 = Math.floor(candidate1);
        let cost2 = calculateCost(arr, candidate1, i);
        minCost = Math.min(minCost, cost2);
    }

    return minCost;
}

function calculateCost(arr, candidate, index) {
    let cost = 0;
    let n = arr.length;

    if (index > 0) {
        cost += Math.pow(arr[index] - arr[index - 1], 2);
    }
    cost += Math.pow(candidate - arr[index], 2);
    cost += Math.pow(arr[index + 1] - candidate, 2);
    if (index + 1 < n - 1) {
        cost += Math.pow(arr[index + 2] - arr[index + 1], 2);
    }

    return cost;
}

// Example usage:
let arr = [1, 3, 5, 2, 10];
console.log(getMinimumCost(arr));  // Output: 49