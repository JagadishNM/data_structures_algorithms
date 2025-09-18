// Here's a JavaScript function that will find all combinations of a specific length from an array that sum up to a target value. This solution uses recursion and backtracking to generate combinations, check their sums, and collect valid ones.

// Explanation
// The function findCombinations takes three arguments:
// arr: the array of numbers.
// combinationLength: the desired combination length.
// target: the target sum value.
// The function will return an array of all combinations that sum up to the given target.
// Implementation
// javascript
// Copy code

function findCombinations(arr, combinationLength, target) {
  const result = [];

  // Helper function for backtracking
  function backtrack(start, path, sum) {
    // If the path length matches the combination length and the sum equals the target, add to the result
    if (path.length === combinationLength && sum === target) {
      result.push([...path]);
      return;
    }

    // If the path length exceeds the combination length or the sum exceeds the target, stop exploring
    if (path.length > combinationLength || sum > target) return;

    // Loop through remaining elements
    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(i + 1, path, sum + arr[i]);
      path.pop(); // backtrack
    }
  }

  backtrack(0, [], 0);
  return result;
}

// Example usage:
let arr = [2, 3, 4, 5, 1];
let combination = 2;
let target = 6;

console.log(findCombinations(arr, combination, target));

// Output: [[2, 4], [5, 1]]
// Explanation of the Code:
// Initialization:

// result stores the valid combinations.
// The backtrack function is used to explore all possible combinations.
// Backtracking:

// The base case checks if the current combination length matches combinationLength and if the sum matches the target.
// If the combination length or sum exceeds the allowed limits, the function returns early.
// The loop iterates over the remaining elements to add to the current combination.
// The path.pop() statement removes the last added element to try a new combination.
// Output:
// lua
// Copy code
// [[2, 4], [5, 1]]
// This solution efficiently finds all combinations by avoiding unnecessary explorations once the conditions are no longer met.