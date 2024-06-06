/**
 * @param {string} s
 * @return {boolean}
 */

// https://leetcode.com/problems/valid-palindrome/submissions/1247939483/

let isPalindrome = function (str) {
	let s = cleanUp(str);
	return isPal(s);
};

function cleanUp(str) {
	let validChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
	let cleanstr = '';
	for (const element of str) {
		const lowrCase = element.toLowerCase();
		if (validChars.indexOf(lowrCase) !== -1) {
			cleanstr += lowrCase;
		}
	}

	return cleanstr;
}

function isPal(str) {
	let left = 0;
	let right = str.length - 1;
	while (left < right) {
		if (str[left] !== str[right]) {
			return false;
		}
		left++;
		right--;
	}

	return true;
}
