function maxProduct(nums) {
    if (nums.length === 0) return 0;
    
    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let tempMax = Math.max(nums[i], maxProduct * nums[i], minProduct * nums[i]);
        minProduct = Math.min(nums[i], maxProduct * nums[i], minProduct * nums[i]);
        maxProduct = tempMax;
        
        result = Math.max(result, maxProduct);
    }
    
    return result;
}

// Test cases
const nums1 = [2, 3, -2, 4];
console.log("Output for nums1:", maxProduct(nums1)); // Output: 6

const nums2 = [-2, 0, -1];
console.log("Output for nums2:", maxProduct(nums2)); // Output: 0
