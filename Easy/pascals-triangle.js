function pascalsTriangle(numRows) {
	let res = [];
	if (numRows >= 1) res.push([1]);
	if (numRows >= 2) res.push([1, 1]);

	for (let i = 2; i < numRows; i++) {
		let first = 1,
			last = 1,
			prevArr = res[i - 1];

		if (prevArr.length === 2) {
			res.push([first, first + last, last]);
		} else {
			let left = 0,
				right = 1,
				add = [];
			while (right < prevArr.length) {
				add.push(prevArr[left] + prevArr[right]);
				left++;
				right++;
			}
			res.push([first, ...add, last]);
		}
	}

	return res;
}

console.log(pascalsTriangle(5));

// https://leetcode.com/problems/pascals-triangle/description/
