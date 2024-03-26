function moveZeroxToEnd(arr) {
	let j = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
			j++;
		}
	}

	return arr;
}

console.log(moveZeroxToEnd([2, 0, 4, 0, 5, 7, 0, 5, 9, 0, 5, 5, 5, 4]));
