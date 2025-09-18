// To determine the minimum number of godowns (storage units) required at the kart facility, we can solve this by treating it as an interval problem. Specifically, we need to determine the maximum number of overlapping intervals (representing packages in the kart facility).

// Each package has an arrival time and a departure time. If multiple packages are present simultaneously, they will require separate godowns.

// Steps to Solve:
// Create two arrays:
// Arrival times: [9:00, 9:40, 9:50, 11:00, 15:00, 18:00]
// Departure times: [9:10, 12:00, 11:20, 11:30, 19:00, 20:00]
// Sort both arrays (time-based).
// Use a two-pointer approach to simulate packages arriving and leaving:
// Keep a counter for the number of godowns currently in use.
// Increment the counter when a package arrives, decrement it when a package departs.
// Track the maximum number of godowns used at any point in time.
// Implementation in JavaScript:
// javascript
// Copy code

function minimumGodowns(arrival, departure) {
    // Sort arrival and departure times
    arrival.sort((a, b) => a - b);
    departure.sort((a, b) => a - b);

    let godowns = 0, maxGodowns = 0;
    let i = 0, j = 0;

    // Two-pointer approach
    while (i < arrival.length && j < departure.length) {
        if (arrival[i] < departure[j]) {
            // A new package arrives before the previous one leaves
            godowns++;
            maxGodowns = Math.max(maxGodowns, godowns);
            i++;
        } else {
            // A package departs
            godowns--;
            j++;
        }
    }

    return maxGodowns;
}

// Input times converted to integers for simplicity (24-hour format)
const arrival = [900, 940, 950, 1100, 1500, 1800];
const departure = [910, 1200, 1120, 1130, 1900, 2000];

console.log(minimumGodowns(arrival, departure)); // Output: 3
// Explanation of Output:
// After sorting:
// Arrival: [900, 940, 950, 1100, 1500, 1800]
// Departure: [910, 1120, 1130, 1200, 1900, 2000]
// Process events:
// At 900: A package arrives (godowns = 1).
// At 910: A package departs (godowns = 0).
// At 940: A package arrives (godowns = 1).
// At 950: Another package arrives (godowns = 2).
// At 1100: Another package arrives (godowns = 3).
// At 1120: A package departs (godowns = 2).
// At 1130: Another package departs (godowns = 1).
// Continue similarly...
// The maximum number of godowns in use at any point is 3. Hence, 3 godowns are required.