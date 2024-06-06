function climbStairs(n) {
	let dp = [];
	dp[0] = 0;
	dp[1] = 1;
	dp[2] = 2;

	for (let i = 3; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[n];
}
console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));

// https://leetcode.com/problems/climbing-stairs/submissions/1248108171/
