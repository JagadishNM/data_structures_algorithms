function search(arr, val) {
	let min = 0;
	let max = arr.length - 1;

	while (min <= max) {
		let middle = Math.floor((min + max) / 2);
		if (arr[middle] < val) {
			min = middle + 1;
		} else if (arr[middle] > val) {
			max = middle - 1;
		} else {
			console.log(middle);
			return middle;
		}
	}

	retrun - 1;
}

search([1, 2, 3, 4, 5, 8, 9, 12, 14, 16], 8);
