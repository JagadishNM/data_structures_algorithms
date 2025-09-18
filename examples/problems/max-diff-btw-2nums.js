// The question had a list as an input ([3, 6, 10, 1, 4, 6, 5], for example)
// You have to design an algorithm that finds the greatest difference between two elements, such that the larger element appears after the smaller element.
// In the example above, the output should be 7 (10-3 = 7).


// Return -1 if the maximum difference is flat or negative.


// Constraints I remember:
// 1 =< size of array

function maxDifference(arr) {
    // If the array has less than 2 elements, we can't calculate any difference
    if (arr.length < 2) {
        return -1;
    }
    
    let minValue = arr[0];  // Initialize the minimum value with the first element
    let maxDiff = -1;  // Initialize maxDiff to -1
    
    for (let i = 1; i < arr.length; i++) {
        // Calculate the difference between the current element and the minimum value so far
        //let diff = arr[i] - minValue;
        
        // If the difference is positive and greater than the previous maxDiff, update maxDiff
        maxDiff = Math.max(maxDiff, arr[i] - minValue);
        // if (diff > maxDiff) {
        //     maxDiff = diff;
        // }
        
        // Update minValue to the smallest value encountered so far
        minValue = Math.min(minValue, arr[i]);
        // if (arr[i] < minValue) {
        //     minValue = arr[i];
        // }
    }
    
    // Return the maximum difference, or -1 if no valid difference was found
    return maxDiff;
}

// Example usage:
const arr = [3, 6, 10, 1, 4, 6, 5];
console.log(maxDifference(arr));  // Output: 7 (10 - 3)
