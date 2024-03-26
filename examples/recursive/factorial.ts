function factorial(num: number): number {
	if (num < 0) return 0;
	if (num <= 1) return 1;

	return num * factorial(num - 1);
}

const val = factorial(3);
console.log(val);
