// To calculate the sum of double-base palindromes in JavaScript, you need to identify numbers that are palindromic in both base 10 (decimal) and base 2 (binary). Here's how you can do it:

// Steps:
// Check if a number is a palindrome:
// Convert the number to a string and compare it with its reverse.
// Convert to binary and check palindrome:
// Convert the number to binary using toString(2) and perform the same palindrome check.
// Iterate over a range of numbers:
// For example, from 1 to a specified maximum value (e.g., 1,000,000).
// JavaScript Code:
// javascript
// Copy code

// D:\Jagadish\problem-images
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

function sumDoubleBasePalindromes(limit) {
    let sum = 0;

    for (let i = 1; i < limit; i++) {
        const decimalStr = i.toString(); // Base 10 representation
        const binaryStr = i.toString(2); // Base 2 representation

        if (isPalindrome(decimalStr) && isPalindrome(binaryStr)) {
            sum += i;
        }
    }

    return sum;
}

// Example: Sum of double-base palindromes below 1,000,000
const result = sumDoubleBasePalindromes(1000000);
console.log(result);

// Explanation:
// isPalindrome(str):

// Takes a string input, reverses it, and checks if it matches the original string.
// sumDoubleBasePalindromes(limit):

// Loops from 1 to limit (exclusive).
// Converts each number to its base-10 and base-2 string representations.
// Checks if both are palindromes.
// Adds the number to the sum if the condition is true.
// Output:

// For numbers below 1,000,000, this would output the sum of all double-base palindromes.
// Example Output:
// For the range below 1,000,000, this function outputs:

// plaintext
// Copy code
// 872187
// This value represents the sum of all numbers less than 1,000,000 that are palindromic in both decimal and binary formats.