function findLongestSubstring(str) {
	let longest = 0,
		seen = {},
		start = 0;

	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (seen[char]) {
			start = Math.max(start, seen[char]);
		}

		longest = Math.max(longest, i - start + 1);
		seen[char] = i + 1;
	}

	console.log(longest);
	return longest;
}

findLongestSubstring('pwwkew');
