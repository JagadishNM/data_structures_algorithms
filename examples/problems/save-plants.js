// Problem 1: Save the Plants


// There are n number of dying plants. Each plant i has a saving factor sf[i], which is the minimum size of fertilizer bag that the plant can be saved with, and each fertilizer bag j has a size s[j]. If s[j] >= sf[i], we want to assign the fertilizer bag j to plant i, and the plant can be saved. Maximize the number of plants that we can save.


// Example 1:
// Input: saving factor (sf) = [1,2,3], fertilizer bag size (s) = [1,1]
// Output: 1
// Explanation: You have 3 plants and 2 fertilizer bags.
// The saving factor of 3 plants are 1, 2, 3.
// And even though you have 2 fertilizer bag, since their size is both 1, you could only save the plant having saving factor 1
// You need to output 1.

// Sort the Inputs:

// Sort the saving factors sf in ascending order.
// Sort the fertilizer bag sizes s in ascending order.
// Greedy Matching:

// Use two pointers, one for the saving factors (i) and one for the fertilizer bag sizes (j).
// Iterate through both arrays:
// If the fertilizer bag size s[j] is greater than or equal to the saving factor sf[i], assign the bag to the plant and move both pointers forward.
// Otherwise, move only the pointer for the fertilizer bag (j).
// Count the number of successful assignments.
// Return the Count:

// The count represents the maximum number of plants that can be saved.
// Code Implementation in JavaScript
// javascript
// Copy code

// Leetcode https://leetcode.com/problems/assign-cookies/submissions/1460717197/
function saveThePlants(sf, s) {
    // Sort saving factors and fertilizer bag sizes
    sf.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    
    let i = 0, j = 0;
    let savedPlants = 0;
    
    // Greedy approach to assign bags to plants
    while (i < sf.length && j < s.length) {
        if (s[j] >= sf[i]) {
            // Save the plant
            savedPlants++;
            i++; // Move to the next plant
        }
        j++; // Move to the next bag
    }
    
    return savedPlants;
}

// Example usage
const sf = [1, 2, 3];
const s = [1, 1];
console.log(saveThePlants(sf, s)); // Output: 1
// Explanation
// Input Sorting:
// sf = [1, 2, 3]
// s = [1, 1]
// Greedy Matching:
// Compare sf[0] (1) with s[0] (1): Match! Save plant 1. Move i to 1 and j to 1.
// Compare sf[1] (2) with s[1] (1): No match. Move j to 2.
// End of the fertilizer array, so stop.
// Result:
// Only 1 plant is saved, so the output is 1.