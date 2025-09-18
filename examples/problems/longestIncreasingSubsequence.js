// Given an array like {1,1,3,2,6,4,1,7}, find the longest increasing subsequence. In this case it is 4, {1, 3, 6, 7}.


// If there is no increasing subsequence, return 1. E.g. arr = {5,3,1}, return 1.

function longestIncreasingSubsequence(arr) {
    if (arr.length === 0) return 1;

    let lis = [];
    
    for (let num of arr) {
        // Find the index where num can be placed using binary search
        let left = 0, right = lis.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (lis[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        // If left is equal to the length of lis, num is greater than all elements, so we append it
        if (left === lis.length) {
            lis.push(num);
        } else {
            // Otherwise, replace the element at index left with num
            lis[left] = num;
        }
    }

    return lis.length;
}

// Example usage:
const arr = [1, 1, 3, 2, 6, 4, 1, 7];
console.log(longestIncreasingSubsequence(arr));  // Output: 4 (LIS is [1, 3, 6, 7])
