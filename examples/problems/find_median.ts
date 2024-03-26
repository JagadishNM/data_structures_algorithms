function findMedian(arr: number[]): number {
	// Write your code here
	arr.sort((a: number, b: number): number => {
		return a - b;
	});

	const ln: number = arr.length - 1;
	let median: number = arr[ln / 2];
	return median;
}

findMedian([1, 2, 3, 4, 5]);
