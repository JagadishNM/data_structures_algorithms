function validAnagram(word1, word2) {
	if (word1.length !== word2.length) {
		return false;
	}

	const lookup = {};

	for (const element of word1) {
		lookup[element] = (lookup[element] || 0) + 1;
	}

	for (const element of word2) {
		if (lookup[element]) lookup[element]--;
		else return false;
	}

	return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagram('anagrams', 'nagaramm')); // false
let str1 = 'I am Monu';
let str2 = 'am I onMu';
console.log(validAnagram(str1, str2)); // true

// https://leetcode.com/problems/valid-anagram/submissions/1247917078/
