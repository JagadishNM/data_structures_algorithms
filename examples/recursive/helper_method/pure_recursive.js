function collectOddValues1(arr) {
	let newArr = [];

	if (arr.length === 0) {
		return newArr;
	}

	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0]);
	}

	newArr = newArr.concat(collectOddValues1(arr.slice(1)));
	return newArr;
}

collectOddValues1([1, 2, 3, 4, 5]);
