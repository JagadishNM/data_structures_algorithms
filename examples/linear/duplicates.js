function areThereDuplicates(...args) {
	return new Set(args).size !== arguments.length;
}

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates('a', 'b', 'c', 'a'); // true
