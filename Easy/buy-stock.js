function maxProfit(prices) {
	let currMin = prices[0];
	let currMax = 0;
	for (const element of prices) {
		currMin = Math.min(currMin, element);
		currMax = Math.max(currMax, element - currMin);
	}

	return currMax;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
