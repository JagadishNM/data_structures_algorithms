// https://leetcode.com/discuss/interview-question/570407/salesforce-oa-hackerrank

function findMVP(n, A) {
    // Initialize an empty array to store the MVPs
    let res = [];
    
    // The rightmost element is always an MVP
    res.push(A[n - 1]);
    
    // Initialize the maximum element to the rightmost element
    let maxRight = A[n - 1];
    
    // Traverse the array from the second last element to the first element
    for (let i = n - 2; i >= 0; i--) {
        // If the current element is greater than or equal to maxRight, it's an MVP
        if (A[i] >= maxRight) {
            res.push(A[i]);
            // Update the maxRight to the current element
            maxRight = A[i];
        }
    }
    
    // The result array is in reverse order, so we reverse it
    res.reverse();
    
    return res;
}

// Example usage:
let n = 6;
let A = [16, 17, 4, 3, 5, 2];
console.log(findMVP(n, A)); // Output: [17, 5, 2]
