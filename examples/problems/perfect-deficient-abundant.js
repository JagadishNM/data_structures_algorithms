// Perfect, Deficient and Abundant
// numbers
// A perfect number is a number for which the sum of its
// proper divisors is exactly equal to the number. For
// example, the sum of the proper divisors of 28 would
// be 1+2+4+7+ 14 = 28, which means that 28 is a
// perfect number.
// A number n is called deficient if the sum of its proper
// divisors is less than n and it is called abundant if this
// sum exceeds n.
// Write a function classify() that takes the number n
// as a parameter and returns the string "Perfect",
// "Deficient" or "Abundant" based on the above
// definition by factorizing n and checking.
// PS: If you are using Groovy, read the number n from
// STDIN and use STDOUT for the classification output.

function classify(n) {
    // Function to calculate the sum of proper divisors
    function sumOfProperDivisors(n) {
        let total = 0;
        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                total += i;
            }
        }
        return total;
    }

    // Get the sum of proper divisors
    let sumDivisors = sumOfProperDivisors(n);

    // Classify the number
    if (sumDivisors === n) {
        return "Perfect";
    } else if (sumDivisors < n) {
        return "Deficient";
    } else {
        return "Abundant";
    }
}

// Example usage
console.log(classify(28));  // Output: "Perfect"
console.log(classify(15));  // Output: "Deficient"
console.log(classify(12));  // Output: "Abundant"