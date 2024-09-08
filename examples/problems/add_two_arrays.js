function addTwoNumbers(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = [];

    // While there are still digits to add or a carry remains
    while (i >= 0 || j >= 0 || carry > 0) {
        // Get the current digits or 0 if out of bounds
        let digitA = i >= 0 ? a[i] : 0;
        let digitB = j >= 0 ? b[j] : 0;

        // Calculate the sum of the digits and the carry
        let sum = digitA + digitB + carry;

        // Calculate the new digit and the new carry
        let newDigit = sum % 10;
        carry = (sum - newDigit) / 10;

        // Prepend the new digit to the result array
        result.unshift(newDigit);

        // Move the pointers
        i--;
        j--;
    }

    return result;
}

let a = [9, 9, 9, 9, 9, 9, 9];
let b = [9, 9, 9, 9];
let output = addTwoNumbers(a, b);

console.log(output); // [8, 9, 9, 9, 0, 0, 0, 1]
