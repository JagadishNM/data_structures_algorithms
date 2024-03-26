function recursiveRange(x: number): number {
	if (x === 0) return 0;
	return x + recursiveRange(x - 1);
}

recursiveRange(4);

//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
