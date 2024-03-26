function twoSum(arr, goal) {
	let map = new Map();

	for (let i = 0; i < arr.length; i++) {
		const remain = goal - arr[i];
		if (map.has(remain)) {
			const idx1 = map.get(remain);
			const idx2 = i;
			return [idx1, idx2];
		}

		map.set(arr[i], i);
	}

	return -1;
}

// The Two Sum problem states that given an array of integers, return indices of the two numbers such that they add up to a specific target. We can’t use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4, 5, 8], 12));
