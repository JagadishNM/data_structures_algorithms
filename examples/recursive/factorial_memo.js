function factorialMemo(n) {
	if (Number.isInteger(n) && n > 0) {
		// Positive integers only
		if (!(n in factorialMemo)) {
			// If no cached result
			factorialMemo[n] = n * factorialMemo(n - 1); // Compute and cache it
		}
		return factorialMemo[n]; // Return the cached result
	} else {
		return NaN; // If input was bad
	}
}

factorialMemo[1] = 1; // Initialize the cache to hold this base case.
factorialMemo(6); // => 720
factorialMemo[5];
console.log(factorialMemo);
