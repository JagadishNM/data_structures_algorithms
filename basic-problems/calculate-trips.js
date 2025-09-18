// D:\Jagadish\problem-images

function efficientJanitor(weight){
    weight.sort((a,b) => a-b);

    let trips = 0;
    let left = 0;
    let right = weight.length - 1;

    while(left < right){
        if(weight[left] + weight[right] <= 3.00){
            left++;
        }

        right--;
        trips++;
    }

    return trips;
}

efficientJanitor([1.01, 1.99, 2.5, 1.5, 1.01]); // 3


// Step-by-Step Explanation
// Sorting:

// First, sort the weights in ascending order. This ensures that you can efficiently pair the lightest and heaviest bags that fit within the weight limit.
// Two Pointers:

// Use two pointers: one (left) starting at the beginning (lightest bag) and the other (right) starting at the end (heaviest bag).
// Logic:

// Check if the sum of the weights at left and right is less than or equal to 3.0.
// If yes, move both pointers inward (left++ and right--) because the lightest and heaviest bag are grouped in one trip.
// If no, include only the heaviest bag (right--), and increment the trip count.
// Increment Trips:

// Each iteration of the loop represents one trip, regardless of whether it includes one or two bags.
// Return Trips:

// After processing all the bags, return the total number of trips.
// Efficiency
// Time Complexity:

// Sorting: O(n log n) (due to sort()).
// Two-pointer traversal: O(n).
// Overall: O(n log n).
// Space Complexity:

// The solution uses a constant amount of extra space: O(1).