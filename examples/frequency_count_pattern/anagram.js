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

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));  // false

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;

    const getSum = str => str.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);

    return getSum(str1) === getSum(str2);
}
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("abc", "bca"));       // true
console.log(areAnagrams("abc", "cbd"));       // false
