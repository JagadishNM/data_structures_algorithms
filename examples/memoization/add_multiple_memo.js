function memoization(f) {
	const cache = new Map(); // Value cache stored in the closure.

	return function (...args) {
		// Create a string version of the arguments to use as a cache key.
		let key = args.length + args.join('+') + f.name;
		if (cache.has(key)) {
			return cache.get(key);
		} else {
			let result = f.apply(this, args);
			cache.set(key, result);
			return result;
		}
	};
}


const constructPropertyName = (functionToMemo, args) => {
	let propToCheck = [];
	propToCheck = propToCheck.concat(functionToMemo.name, args);
	return propToCheck.join('|');
};

const summation = (a, b) => {
	return a + b;
};

const multiply = (a, b) => {
	return a * b;
};

const fib = (n, memo = []) => {
	if (memo[n] !== undefined) return memo[n];

	if (n <= 2) return 1;

	return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
};



const memSummation = memoization(summation); // `memoize` is a Higher order function
const memMultiply = memoization(multiply); // `memoize` is a Higher order function
const memoFib = memoization(fib);

console.log(memSummation(10, 50));
console.log(memSummation(10, 10));
console.log(memSummation(10, 50));

console.log(memMultiply(10, 50));
console.log(memMultiply(10, 50));

console.log(memoFib(6));
console.log(memoFib(8));
console.log(memoFib(6));
