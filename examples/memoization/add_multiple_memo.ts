const memoize = (functionToMemo: any) => {
	const memoizedCache: any = {};

	return (...args: any) => {
		const propToCheck = constructPropertyName(functionToMemo, args);

		if (!memoizedCache[propToCheck]) {
			memoizedCache[propToCheck] = functionToMemo(...args);
		} else {
			console.log('From cache');
		}

		return memoizedCache[propToCheck];
	};
};

const constructPropertyName = (functionToMemo: any, args: any) => {
	let propToCheck: any = [];
	propToCheck = propToCheck.concat(functionToMemo.name, args);
	return propToCheck.join('|');
};

const summation = (a: any, b: any) => {
	return a + b;
};

const multiply = (a: any, b: any) => {
	return a * b;
};

const fib = (n, memo: number[] = []) => {
	if (memo[n] !== undefined) return memo[n];

	if (n <= 2) return 1;

	return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
};
// start can also call ////////////////

memoize(fib)(6);

// end ////////////////

const memSummation = memoize(summation); // `memoize` is a Higher order function
const memMultiply = memoize(multiply); // `memoize` is a Higher order function
const memoFib = memoize(fib);

console.log(memSummation(10, 50));
console.log(memSummation(10, 10));
console.log(memSummation(10, 50));

console.log(memMultiply(10, 50));
console.log(memMultiply(10, 50));

console.log(memoFib(6));
console.log(memoFib(8));
console.log(memoFib(6));
