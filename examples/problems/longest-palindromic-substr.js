function longestPalindromicSubstring(str) {
	let maxLength = 0;
	let start = 0;

	// Helper function to expand around a center
	function expandAroundCenter(left, right) {
		while (left >= 0 && right < str.length && str[left] === str[right]) {
			if (right - left + 1 > maxLength) {
				maxLength = right - left + 1;
				start = left;
			}
			left--;
			right++;
		}
	}

	// Iterate through the string to find palindromic substrings
	for (let i = 0; i < str.length; i++) {
		expandAroundCenter(i, i); // For odd length palindromes
		expandAroundCenter(i, i + 1); // For even length palindromes
	}

	return str.substring(start, start + maxLength);
}

// Example usage:
const inputString = 'babad';
const longestSubstring = longestPalindromicSubstring(inputString);
console.log(longestSubstring); // Output: "bab"

//https://leetcode.com/problems/longest-palindromic-substring/description/
