function findLongestSubstring(str) {
	const obj = {};
	let maxLen = 0;
	let start = 0;

	for (let i = 0; i < str.length; i++) {
		if (obj[str[i]]) {
			start = Math.max(start, obj[str[i]]);
		}

		obj[str[i]] = i + 1;
		maxLen = Math.max(maxLen, i - start + 1);
	}

	return maxLen;
}

findLongestSubstring(''); // 0
findLongestSubstring('rithmschool'); // 7
findLongestSubstring('thisisawesome'); // 6
findLongestSubstring('thecatinthehat'); // 7
findLongestSubstring('bbbbbb'); // 1
findLongestSubstring('longestsubstring'); // 8
findLongestSubstring('thisishowwedoit'); // 6
