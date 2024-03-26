// for larger number in fibnocci
function fib_table(n) {
	if (n <= 2) return 1;
	let fibNums = [0, 1, 1];

	for (let i = 3; i <= n; i++) {
		fibNums[i] = fib_table(n - 1) + fib_table(n - 2);
	}

	return fibNums[n];
}

console.log(fib_table(2000));
