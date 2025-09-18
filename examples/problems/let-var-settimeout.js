// The difference in behavior between let and var in the loop is due to block scoping and closures in JavaScript. Let's break it down:

// 1. Using let
// When you use let in the for loop:

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // prints 0,1,2
    }, 100);
}
// Block Scope: Each iteration of the loop creates a new block-scoped variable i. This means that each callback function inside the setTimeout gets a reference to a unique instance of i specific to that iteration.
// When setTimeout executes the callback after 100ms, it logs the value of i captured during the corresponding iteration.
// What happens in the background:
// Iteration 1: let i = 0 (new scope); callback logs 0.
// Iteration 2: let i = 1 (new scope); callback logs 1.
// Iteration 3: let i = 2 (new scope); callback logs 2.
// Output:

// Copy code
// 0
// 1
// 2
// 2. Using var
// When you use var in the for loop:

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // prints 3 for 3 times
    }, 100);
}
// Function Scope: Variables declared with var are not block-scoped but function-scoped. The i variable in the loop is shared across all iterations.
// By the time the setTimeout callbacks execute (after 100ms), the loop has already finished, and i has incremented to 3.
// All callbacks share the same reference to i, so they all log the final value of i (which is 3).
// What happens in the background:
// The same i is used for all iterations, so all callbacks have access to the same i.
// By the time the callbacks execute, the value of i is 3.
// Output:

// Copy code
// 3
// 3
// 3
// Key Differences:
// Scope:

// let creates a new variable for each iteration (block-scoped).
// var uses the same variable across all iterations (function-scoped).
// Closures:

// In the var case, all closures capture the same i (shared across iterations).
// In the let case, each closure captures a different i (unique to the iteration).
// How to Fix with var:
// You can fix the var behavior by creating a new scope for each iteration using an Immediately Invoked Function Expression (IIFE) or block-scoping with a function:

// javascript
// Copy code
for (var i = 0; i < 3; i++) {
    (function(i) {
        setTimeout(() => {
            console.log(i);
        }, 100);
    })(i); // Pass `i` into the IIFE
}
// This creates a new function scope for each iteration, capturing the value of i at that point. Output:

// Copy code
// 0
// 1
// 2

// example 1 with print function
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function print(value){
setTimeout(() => console.log(value), 1000);
}
for (var i = 0; i < 10; i++) {
  print(a[i]) // prints 1 to 10
}

// example 2 with var
// explaination of how i becomes 10 https://chatgpt.com/c/675d5503-8858-800e-aed4-a2e9b69df8a7
const c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(c[i]), 1000); // 10 times undefined
}

// example 3 with let

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000); // prints 0 to 10
}
