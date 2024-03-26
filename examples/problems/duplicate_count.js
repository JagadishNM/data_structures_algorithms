function duplicateCount(arr) {
	return arr.reduce((accumulator, value) => {
		return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
	}, {});
}

let arr = [1, 2, 5, 8, 9, 4, 5, 6, 4, 5, 6, 5, 5];
console.log(duplicateCount(arr));
