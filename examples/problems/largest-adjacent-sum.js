function largestAdjacentSum(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least two elements.");
    }

    let maxSum = arr[0] + arr[1]; // Initialize with the sum of the first two elements.

    for (let i = 1; i < arr.length - 1; i++) {
        const currentSum = arr[i] + arr[i + 1]; // Sum of two adjacent numbers.
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
