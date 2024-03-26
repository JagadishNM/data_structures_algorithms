function collectOddValues(arr: number[]) {
	let result: number[] = [];

	function helper(helperInput: number[]) {
		if (helperInput.length === 0) return;

		if (helperInput[0] % 2 != 0) {
			result.push(helperInput[0]);
		}
		helper(helperInput.slice(1));
	}
	helper(arr);
	return result;
}

collectOddValues([2, 5, 6, 4, 7, 8, 9]);
