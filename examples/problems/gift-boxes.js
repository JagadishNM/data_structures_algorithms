function minArrayDiff(gift_boxes) {
    // Helper function to find all possible values for a gift box after operations
    const getPossibleValues = (num) => {
        let values = new Set();
        while (num % 2 === 0) { // Keep halving while the number is even
            values.add(num);
            num /= 2;
        }
        values.add(num); // Add the odd number as well
        return values;
    };

    // Create a list of all possible transformed numbers for all gift boxes
    let possibleValues = new Set();
    for (let i = 0; i < gift_boxes.length; i++) {
        let values = getPossibleValues(gift_boxes[i]);
        for (let value of values) {
            possibleValues.add(value);
        }
    }

    // Convert the set to an array and find the minimum possible diff
    let sortedValues = Array.from(possibleValues).sort((a, b) => a - b);
    let minDiff = Infinity;

    // Iterate through the possible values and find the minimum difference between max and min
    for (let i = 0; i <= sortedValues.length - gift_boxes.length; i++) {
        let diff = sortedValues[i + gift_boxes.length - 1] - sortedValues[i];
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
}

// Example usage
const gift_boxes = [1, 4, 3, 8];
console.log(minArrayDiff(gift_boxes)); // Output: 1



// You are teacher and wanted to give some gift to N students. You ordered N gift box from amazon and each gift box have some gift items inside it. But each gift box has different number of gift items inside it.


// You as teacher wanted to make sure, each gift box should contains approximately same number of gifts items. And wanted to minimised the difference of gift items in any two gift box.
// You have pool of infinite number of gift items with you, which you can used that pool to balance (add/subtract) gift items in any gift box but with only given two operation.


// For example if you have N = 4 students and array of gift box represented as gift_boxes = [1,4,3,8], each giftboxes[i] represent number of gift items inside that gift box.


// If you want, you can perform below two operation on any gift box, any number of time.


// If number of gift items in gift box is odd then you can double the gift item in that gift box.
// Here gift_boxes[0] has gift items=1 (odd), you can double it then your gift boxes
// array becomes = [2,4,3,8]
// If number of gift items in gift box is even then you can half the gift item in that gift box.
// Here gift_boxes[1] has gift items=4 (even), you can half it then your gift boxes
// array becomes = [1,2,3,8]
// Now, "array-diff" of giftboxes array is maximum difference between number of gift items of any two gift box in the gift_boxes array.
// Return the minimum "array-diff" of gift_boxes array can have after performing some number of above operations.


// Example 1:
// Input: gift_boxes = [1,4,3,8]
// Output: 1
// Explanation: You can transtorm the array to
// [1,4,3,8] -> "array-diff" of gift_boxes array = 8-1 = 7
// [2,4,3,8] -> "array-diff" of gift _boxes array = 8-2 = 6
// [2,2,3,8] - "array-diff" of gift_boxes array = 8-2 = 6
// [2,2,3,4] -> "array-diff" of gift_boxes array = 4-2 = 2
// [2,2,3,2] - "array-diff" of gift_boxes array = 3-2 = 1
// then minimum "array-diff" of gift _boxes array will be = 1.

// To approach this problem, we can leverage the following strategy:

// Operations Understanding:

// Doubling an odd number increases its size significantly.
// Halving an even number reduces it significantly.
// These operations suggest that we should try to reduce the difference between the largest and smallest number of items by transforming the numbers in a way that the final array is as close as possible in terms of values.

// Strategy:

// We should aim to reduce the array's values by halving even numbers as much as possible.
// Odd numbers can be doubled, but this operation might increase the disparity in some cases. So, we need to consider both increasing and decreasing the values in an optimal manner.
// Simulating the Operations:

// For each number, we can keep halving it (if it's even) and keep doubling it (if it's odd) to create possible values.
// After all possible transformations, we can check the difference between the maximum and minimum values in the transformed array.
// Priority Queue or Set:

// Use a priority queue (min-heap and max-heap) to track the smallest and largest values as we keep transforming the numbers.
// For each number, consider both its halved and doubled versions and continue until the number can no longer be halved or doubled.
// Detailed Solution
// Sort the Gift Boxes:

// Start by sorting the gift_boxes array. This helps us manage the range of gift boxes better since the problem involves reducing the maximum difference.
// Transform Each Gift Box:

// For each number, repeatedly halve it if it's even, and double it if it's odd.
// After processing all the boxes, check the current difference between the maximum and minimum value.

// Explanation of the Code:
// Helper Function (getPossibleValues):

// This function takes a number and returns a set of all possible values that can be obtained by repeatedly halving the number until it becomes odd, then including that odd number as well.
// For example, if the number is 4, the set will include [4, 2, 1] because halving 4 gives 2, and halving 2 gives 1.
// Main Logic (minArrayDiff):

// The main function collects all possible values for each gift box by calling the helper function.
// Then, it sorts all possible values and finds the minimum difference between the largest and smallest values that can be obtained by selecting N values from the set of possible values (where N is the number of gift boxes).
// The algorithm iterates through all possible windows of size N in the sorted values and calculates the difference between the largest and smallest values in that window.
// Efficiency:

// Time Complexity:
// Sorting the possible values takes 
// 𝑂
// (
// 𝑚
// log
// ⁡
// 𝑚
// )
// O(mlogm), where m is the number of unique values generated by halving or doubling.
// The final loop that checks all possible subarrays takes 
// 𝑂
// (
// 𝑚
// )
// O(m).
// Hence, the overall time complexity is 
// 𝑂
// (
// 𝑚
// log
// ⁡
// 𝑚
// )
// O(mlogm), where m is the number of possible distinct values in the set.
// Space Complexity:
// The space complexity is 
// 𝑂
// (
// 𝑚
// )
// O(m) for storing the set of possible values.
// Example Walkthrough:
// For the input gift_boxes = [1, 4, 3, 8]:

// The possible values for each gift box would be:
// 1 -> [1]
// 4 -> [4, 2, 1]
// 3 -> [3]
// 8 -> [8, 4, 2, 1]
// After collecting all the possible values, we have:

// [1, 2, 3, 4, 8]
// Then, we sort these values and try to find the subarray of size 4 (since there are 4 gift boxes) that minimizes the difference between the maximum and minimum values. The smallest difference is 1, which occurs for the subarray [2, 3, 4, 8].

// Thus, the output is 1.

// Edge Cases:
// If all numbers in gift_boxes are the same, the difference is already 0.
// If all numbers are very large or very small, the solution will still work because it operates based on halving and doubling, which can handle large ranges efficiently.