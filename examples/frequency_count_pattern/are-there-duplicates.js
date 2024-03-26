function areThereDuplicates(...args) {
	if (!args.length) return false;
	
	let lookup  = {};
	for (const item of args) {
		if (lookup[item]) return true;
		lookup[item] = 1;
	  }
	return false;
}

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates('a', 'b', 'c', 'a'); // true
