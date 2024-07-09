// https://leetcode.com/discuss/interview-question/1874750/minimize-array-cost

function getMinimumCost(arr) {
    let n = arr.length;
    let minCost = Infinity;

    for (let i = 0; i < n - 1; i++) {
        // Check for mid-point candidate
        let candidate1 = (arr[i] + arr[i + 1]) / 2;
        let candidate2 = Math.ceil(candidate1);

        // Check the cost if we insert candidate2 (rounded up)
        let cost1 = calculateCost(arr, candidate2, i);
        minCost = Math.min(minCost, cost1);

        // Check the cost if we insert candidate1 (floored)
        candidate1 = Math.floor(candidate1);
        let cost2 = calculateCost(arr, candidate1, i);
        minCost = Math.min(minCost, cost2);
    }

    return minCost;
}

function calculateCost(arr, candidate, index) {
    let cost = 0;
    let n = arr.length;

    if (index > 0) {
        cost += Math.pow(arr[index] - arr[index - 1], 2);
    }
    cost += Math.pow(candidate - arr[index], 2);
    cost += Math.pow(arr[index + 1] - candidate, 2);
    if (index + 1 < n - 1) {
        cost += Math.pow(arr[index + 2] - arr[index + 1], 2);
    }

    return cost;
}

// Example usage:
// let arr = [1, 3, 5, 2, 10];
// console.log(getMinimumCost(arr));  // Output: 49


// function getMinimumCost(arr) {
//     // Function to calculate the cost of the array
//     function calculateCost(arr) {
//         let cost = 0;
//         for (let i = 1; i < arr.length; i++) {
//             cost += Math.pow(arr[i] - arr[i - 1], 2);
//         }
//         return cost;
//     }

//     let n = arr.length;
//     let minCost = Infinity;

//     // Try inserting a number between every pair of elements
//     for (let i = 0; i < n - 1; i++) {
//         let num1 = arr[i];
//         let num2 = arr[i + 1];
//         let candidate = Math.floor((num1 + num2) / 2);

//         // Try inserting candidate between arr[i] and arr[i + 1]
//         let newArray1 = [...arr.slice(0, i + 1), candidate, ...arr.slice(i + 1)];
//         minCost = Math.min(minCost, calculateCost(newArray1));

//         // Try inserting candidate + 1 and candidate - 1 for more accuracy
//         let newArray2 = [...arr.slice(0, i + 1), candidate + 1, ...arr.slice(i + 1)];
//         minCost = Math.min(minCost, calculateCost(newArray2));

//         let newArray3 = [...arr.slice(0, i + 1), candidate - 1, ...arr.slice(i + 1)];
//         minCost = Math.min(minCost, calculateCost(newArray3));
//     }

//     return minCost;
// }

// // Example usage:
// let arr = [1, 3, 5, 2, 10];
// console.log(getMinimumCost(arr));  // Output: 49
