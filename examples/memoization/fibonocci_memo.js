function fibMemo(n, memo = []) {
	if (memo[n] !== undefined) return memo[n];

	if (n === 0) {
		return 0;
	} else if (n === 1) {
		return 1;
	}

	return (memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo));
}

console.log(fibMemo(8));