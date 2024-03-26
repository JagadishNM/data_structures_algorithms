// Olog(2^exponent) + O(n) = O(nlogn)
function merge(arr1: number[], arr2: number[]): number[] {
	let i: number = 0;
	let j: number = 0;
	let results: number[] = [];

	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}

	return results;
}

function mergeSort(arr: number[]): number[] {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

console.log(mergeSort([4, 8, 6, 1, 5, 2, 55, 9, 44, 88, 99]));
