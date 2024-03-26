function sumZero(arr: number[]) {
	let left: number = 0;
	let right: number = arr.length - 1;

	while (left < right) {
		let sum = arr[left] - arr[right];

		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}

console.log(sumZero([-4, -3, 1, 0, 1, 2, 4]));
