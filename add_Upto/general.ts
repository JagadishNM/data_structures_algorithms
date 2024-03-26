function addUpto(n: number) {
	let total: number = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}

// let t1 = performance.now();
// const val = addUpto(100000);
// let t2 = performance.now();
// console.log(`time====${t2 - t1}  value====${val}`);
