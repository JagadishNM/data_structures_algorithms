function productExceptSelf(nums) {
    const n = nums.length;
    const output = new Array(n).fill(1);
    
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        output[i] *= leftProduct;
        leftProduct *= nums[i];
    }
    
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return output;
}

// Test cases
const nums1 = [1, 2, 3, 4];
console.log("Output for nums1:", productExceptSelf(nums1)); // Output: [24, 12, 8, 6]

const nums2 = [-1, 1, 0, -3, 3];
console.log("Output for nums2:", productExceptSelf(nums2)); // Output: [0, 0, 9, 0, 0]
