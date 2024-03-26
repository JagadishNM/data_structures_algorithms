function countUpAndDown(n: number) {
	console.log('Going up!');
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
	console.log('At the top!\nGoing down...');
	for (let j = n - 1; j >= 0; j--) {
		console.log(j);
	}
	console.log('Back down. Bye!');
}
let t1 = performance.now();
countUpAndDown(5);
let t2 = performance.now();
console.log(`time====${(t2 - t1) / 1000}`);
