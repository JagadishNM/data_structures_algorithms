// https://leetcode.com/discuss/interview-question/363036/twitter-oa-2019-activate-fountain

// Activate Fountain
// There is a one-dimensional garden of length n. In each position of the n length garden, a fountain has been installed. The fountain at the position has a value ali] (where 1 sis n) that describes the coverage limit of fountain i. A fountain can cover the range from the position max( (i-a[i]), 1) to min( (i+a[i]), n).
// For example, if garden length n-3 and a-(1,2. 1), then
// For position 1: a[1]-1, range-1 to 2.
// For position 2: a/2)-2, range - 1 to 3.
// For position 3: a[3]-1, range-2 to 3.
// 1 2 3
// In the beginning, all the fountains are switched off. Determine the minimum number of fountains you need to activate so that whole n length garden will be covered by water. In the example, the 1 fountain at position a/2/covers the whole garden.
// Function Description
// Complete the function fountainActivation in the editor below. The function must return an integer that denotes the minimum number of fountains that must be activated to cover the entire garden by water.
// fountainActivation has the following parameter:
// alal0an-1]: an array of integers
// Constraints
// 1sns 10
// Osalis mint n, 100) (where 1sis 10°)

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
