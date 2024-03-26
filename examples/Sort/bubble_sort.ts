function bubbleSort(arr: number[]): number[] {
	let swap: boolean;
	for (let i = arr.length; i > 0; i--) {
		swap = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swap = false;
			}
		}
		if (swap) break;
	}
	return arr;
}

// bubble sort swap through array and keep large value at last
// bubble sort better for nearly sorted data

console.log(bubbleSort([2, 4, 3, 5, 1]));
