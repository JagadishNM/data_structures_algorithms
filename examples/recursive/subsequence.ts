function isSubsequenceRecursive(str1: string, str2: string) {
	if (str1.length === 0) return true;
	if (str2.length === 0) return false;

	if (str2[0] === str1[0]) {
		return isSubsequenceRecursive(str1.slice(1), str2.slice(1));
	}
	return isSubsequenceRecursive(str1, str2.slice(1));
}
