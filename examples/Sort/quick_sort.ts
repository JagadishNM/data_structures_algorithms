function pivot(
	arr: number[],
	start: number = 0,
	end: number = arr.length - 1
): number {
	const swap = (arr: number[], index1: number, index2: number) => {
		[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
	};

	let pivot: number = arr[start];
	let swapIndx: number = start;

	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIndx++;
			swap(arr, swapIndx, i);
		}
	}

	swap(arr, start, swapIndx);
	return swapIndx;
}

function quickSort(
	arr: number[],
	left: number = 0,
	right: number = arr.length - 1
) {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);
		quickSort(arr, left, pivotIndex - 1);
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

console.log(quickSort([4, 8, 6, 3, 2, 1]));
