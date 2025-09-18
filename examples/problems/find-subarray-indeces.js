// To solve the problem of finding all subarrays whose elements sum up to a given target, we can use a sliding window approach or a prefix sum with hashmap approach. Here's the solution:

// Approach: Prefix Sum with Hashmap
// Use a hashmap to store the cumulative sums encountered so far.
// Traverse the array while maintaining a running sum (prefixSum).
// For each index:
// Check if prefixSum - target exists in the hashmap.
// If it exists, the subarray between the indices corresponding to prefixSum - target and the current index forms a valid subarray.
// Store the indices of these subarrays.
// Implementation in JavaScript:
// javascript
// Copy code
function findSubarraysWithTarget(arr, target) {
    const prefixSumMap = new Map();
    const result = [];
    let prefixSum = 0;

    // Initialize the prefixSumMap with a default value
    prefixSumMap.set(0, [-1]);

    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];

        // Check if there are subarrays that sum to the target
        if (prefixSumMap.has(prefixSum - target)) {
            const startIndices = prefixSumMap.get(prefixSum - target);
            for (const startIndex of startIndices) {
                result.push([startIndex + 1, i]);
            }
        }

        // Update the prefixSumMap
        if (!prefixSumMap.has(prefixSum)) {
            prefixSumMap.set(prefixSum, []);
        }
        prefixSumMap.get(prefixSum).push(i);
    }

    return result;
}

// Example usage
const input = [1, 7, 4, 3, 1, 2, 1, 5, 1];
const target = 7;
console.log(findSubarraysWithTarget(input, target)); 
// Output: [[1, 1], [2, 3], [3, 6], [6, 8]]
// Explanation:
// Prefix Sum:

// At each step, calculate the cumulative sum of the elements up to the current index.
// Finding Target Subarrays:

// If prefixSum - target exists in the map, the indices where it was found form valid starting points for subarrays ending at the current index.
// Map Initialization:

// The map is initialized with 0: [-1] to handle cases where a subarray starting from the beginning matches the target.
// Result Formation:

// For every match found in the map, add the indices of the subarray to the result.
// Complexity:
// Time Complexity: 
// 𝑂
// (
// 𝑛
// )
// O(n), as we traverse the array once.
// Space Complexity: 
// 𝑂
// (
// 𝑛
// )
// O(n), to store the prefix sums in the hashmap.
// Output:
// For the input [1, 7, 4, 3, 1, 2, 1, 5, 1] with a target of 7, the output is:

// lua
// Copy code
// [[1, 1], [2, 3], [3, 6], [6, 8]]