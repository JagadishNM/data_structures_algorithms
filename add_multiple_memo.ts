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

const memSummation = memoize(summation); // `memoize` is a HOC
const memMultiply = memoize(multiply); // `memoize` is a HOC

console.log(memSummation(10, 50));
console.log(memSummation(10, 10));
console.log(memSummation(10, 50));
console.log(memMultiply(10, 50));
console.log(memMultiply(10, 50));
