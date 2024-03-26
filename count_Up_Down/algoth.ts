function countUpAndDownAlg(n: number) {
	console.log('Start order');
	let x = 0;
	while (x <= n) {
		console.log(x);
		x++;
	}
	console.log('Reverse order');
	while (n >= 0) {
		console.log(n);
		n--;
	}
}

let t3 = performance.now();
countUpAndDownAlg(5);
let t4 = performance.now();
console.log(`time====${(t3 - t4) / 1000}`);
