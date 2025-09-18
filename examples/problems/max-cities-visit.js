function maxCities(cities, distances) {
    const combined = cities.map((city, index) => ({
        name: city,
        distance: distances[index]
    }));

    // Sort cities lexicographically by name first, then by distance
    combined.sort((a, b) => {
        if (a.name === b.name) {
            return a.distance - b.distance;
        }
        return a.name.localeCompare(b.name);
    });

    const dp = new Array(cities.length).fill(1);

    // Compute the Longest Increasing Subsequence based on distances
    for (let i = 0; i < combined.length; i++) {
        for (let j = 0; j < i; j++) {
            if (combined[i].distance > combined[j].distance) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

// Example usage
const cities = ['Tucson', 'Albany', 'Smith', 'Westford', 'Berkeley'];
const distances = [102, 95, 114, 1421, 50];
console.log(maxCities(cities, distances)); // Output: 3
// Explanation:
// Mapping Input: Combine city names and distances into objects for easier sorting.
// Sorting: First, sort cities lexicographically. If names are equal, sort by distance.
// Dynamic Programming (LIS): Use a Longest Increasing Subsequence (LIS) approach to calculate the maximum number of cities Jeff can visit based on the increasing distance.
// Result: Return the length of the longest subsequence.