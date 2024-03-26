function maxSubarraySum(arr: number[], num: number) {
	// add whatever parameters you deem necessary - good luck!
	if (arr.length < num) return null;

	let total = 0;
	for (let i = 0; i < num; i++) {
		total += arr[i];
	}
	let currentTotal = total;
	for (let i = num; i < arr.length; i++) {
		currentTotal += arr[i] - arr[i - num];
		total = Math.max(total, currentTotal);
	}
	return total;
}

console.log(maxSubarraySum([1, 8, 2, 5, 4, 6], 3));
