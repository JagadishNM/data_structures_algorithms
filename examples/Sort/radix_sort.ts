/**
 *
 * @param num number in an array
 * @param i position of the number from last, means if number is 54964 then i=0 ==> 4; i=1 ==> 6; i=2 ==> 9
 * @returns number at position i value
 */
function getDigit(num: number, i: number): number {
	return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

/**
 *
 * @param num number in an array
 * @returns number of digits in a given number. means if number is 489 then return 3
 */

function digitCount(num: number): number {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 *
 * @param nums array of intigers
 * @returns max digits in given array of intigers. means if array is [22,4,88,455,954,45896,4586] then return 5
 */
function mostDigits(nums: number[]): number {
	let maxDigits: number = 0;
	for (const element of nums) {
		maxDigits = Math.max(maxDigits, digitCount(element));
	}

	return maxDigits;
}

// k is the max digits and loop will be k times
function radixSort(nums: number[]): number[] {
	let maxDigit = mostDigits(nums);
	for (let k = 0; k < maxDigit; k++) {
		let digitBuckets: any = Array.from({ length: 10 }, () => []);
		for (const element of nums) {
			let digit = getDigit(element, k);
			digitBuckets[digit].push(element);
		}
		nums = [].concat(...digitBuckets);
	}
	return nums;
}

// Radix sort is used to sort without comapring numbers
// It will use buckets
console.log(
	radixSort([2, 55, 444, 88, 5845, 25489, 45855, 545, 44, 587878])
);
