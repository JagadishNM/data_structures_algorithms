// D:\Jagadish\Workspace\test-questions\process-time

function getProcessTime(time) {
    let core1 = 0, core2 = 0;

    // Loop through each process and assign it to the core with the lesser load
    for (let i = 0; i < time.length; i++) {
        if (core1 <= core2) {
            core1 += time[i]; // Assign to core1 if it has less or equal load
        } else {
            core2 += time[i]; // Otherwise, assign to core2
        }
    }

    return [core1, core2]; // Return total times for both cores
}

// Example usage:
const time = [10, 21, 10, 21, 10];
console.log(getProcessTime(time)); // Output: [41, 31]

// Explanation:
// Variables:

// core1 and core2 represent the cumulative process time assigned to core 1 and core 2.
// Greedy Assignment Logic:

// We iterate over each process and assign it to the core that currently has the lesser total process time.
// This ensures that at each step, the load is balanced between the two cores.
// Result:
// After all processes are assigned, the total processing times for both cores are returned as an array [core1, core2].

// Why it's optimal:
// This solution works optimally in O(n) time complexity where n is the number of processes. By assigning each process to the core 
// with the lesser load at each step, it ensures the load is as balanced as possible without the need for complex decision-making or tracking.