// https://leetcode.com/discuss/interview-question/363036/twitter-oa-2019-activate-fountain

function fountainActivation(a) {
    let n = a.length;
    let intervals = new Array(n + 1).fill(0);

    // Calculate the rightmost point each fountain can cover
    for (let i = 0; i < n; i++) {
        let left = Math.max(0, i - a[i]);
        let right = Math.min(n, i + a[i] + 1);
        intervals[left] = Math.max(intervals[left], right);
    }

    let fountainsActivated = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i <= n; i++) {
        if (i > farthest) {
            return -1; // If we can't reach position i, the garden cannot be fully covered
        }

        farthest = Math.max(farthest, intervals[i]);

        if (i == currentEnd) {
            if (i == n) break; // If we've reached the end of the garden
            fountainsActivated++;
            currentEnd = farthest;
        }
    }

    return fountainsActivated;
}

// Example usage:
let garden = [1, 2, 1]; // Example array
console.log(fountainActivation(garden));  // Output should be 1
