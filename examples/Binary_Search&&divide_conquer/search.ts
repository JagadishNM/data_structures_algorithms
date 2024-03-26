function search1(arr, val) {
	let min = 0;
	let max = arr.length - 1;

	while (min <= max) {
		let middle = Math.floor((min + max) / 2);
		//let currentElement = arr[middle];

		if (arr[middle] < val) {
			min = middle + 1;
		} else if (arr[middle] > val) {
			max = middle - 1;
		} else {
			return middle;
		}
	}
	return -1;
}

// O(logn)

console.log(search1([1, 5, 8, 4, 6, 7, 8], 4));
console.log(search1(['abc', 'vfd', 'sf', 'dvdv', 'afwergr'], 'sf'));
