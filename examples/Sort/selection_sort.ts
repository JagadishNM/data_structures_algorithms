function selectionSort(arr: number[]) {
	const swap = (arr: number[], index1: number, index2: number) => {
		[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
	};
	for (let i = 0; i < arr.length; i++) {
		let lowest: number = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) lowest = j;
		}
		if (i != lowest) swap(arr, i, lowest);
	}
	return arr;
}

// selection compare through array and keep smallest value at first
// only one swap
console.log(selectionSort([1, 2, 5, 3, 4]));
