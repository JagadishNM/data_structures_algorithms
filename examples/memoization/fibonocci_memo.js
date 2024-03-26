function fibMemo(n, memo = []) {
	if (memo[n] !== undefined) return memo[n];

	if (n <= 2) return 1;

	let res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
	memo[n] = res;
	return res;
}

console.log(fibMemo(50));
