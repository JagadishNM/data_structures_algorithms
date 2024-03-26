function productOfArray(arr: number[]): number {
	if (arr.length === 0) return 1;

	return arr[0] * productOfArray(arr.slice(1));
}

const val2 = productOfArray([1, 2, 3]);
console.log(val2);
