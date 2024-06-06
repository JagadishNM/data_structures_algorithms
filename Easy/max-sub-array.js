function maxSubArray(nums) {
	let curntMax = nums[0];
	let max = nums[0];

	for (let i = 1; i < nums.length; i++) {
		curntMax = Math.max(nums[i], curntMax + nums[i]);
		max = Math.max(max, curntMax);
	}
	return max;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
//https://leetcode.com/problems/maximum-subarray/description/
