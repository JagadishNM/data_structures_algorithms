type freqObjType = { [key: number]: number };
function isSquare(arr1: Array<number>, arr2: Array<number>) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	const freqCount1: freqObjType = {};
	const freqCount2: freqObjType = {};

	for (let val of arr1) {
		freqCount1[val] = (freqCount1[val] || 0) + 1;
	}

	for (let val of arr2) {
		freqCount2[val] = (freqCount2[val] || 0) + 1;
	}

	for (let key in freqCount1) {
		if (!(Number(key) ** 2 in freqCount2)) {
			return false;
		}

		if (freqCount1[Number(key) ** 2] !== freqCount2[key]) {
			return false;
		}
	}
	return true;
}

console.log(isSquare([1, 2, 3], [4, 9, 1]));

// checking square of 1st argument is second argument
