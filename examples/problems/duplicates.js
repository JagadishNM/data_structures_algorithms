function duplicate(arr) {
	arr.sort((a, b) => {
		if (a < b) return -1;
		if (a > b) return 1;
		return 0;
	});

	let start = 0;
	let next = 1;
	while (next < arr.length) {
		if (arr[start] === arr[next]) {
			console.log(true);
			return true;
		}
		next++;
		start++;
	}
	console.log(false);
	return false;
}

duplicate([5, 8, 7, 4, 9, 4, 2]);
