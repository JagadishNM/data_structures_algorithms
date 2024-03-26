function sumRange(num: number): number {
	if (num === 1) return 1;
	return num + sumRange(num - 1);
}

const a = sumRange(3);
console.log(a);
