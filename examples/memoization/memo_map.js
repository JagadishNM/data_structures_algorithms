function memoize(f) {
	const cache = new Map(); // Value cache stored in the closure.

	return function (...args) {
		// Create a string version of the arguments to use as a cache key.
		let key = args.length + args.join('+');
		if (cache.has(key)) {
			return cache.get(key);
		} else {
			let result = f.apply(this, args);
			cache.set(key, result);
			return result;
		}
	};
}
