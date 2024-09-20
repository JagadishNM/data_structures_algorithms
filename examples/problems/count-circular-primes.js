// Count the Circular Primes
// The number, 197, is called a circular prime because all rotations (not all permutations) of the digits: 197, 971, and 719, are themselves prime.
// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
// Write a program to count the number of circular prime numbers less than or equal to a given number.

const isPrime = n => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
    return true;
};

const getRotations = n => {
    const rotations = [];
    const str = n.toString();
    for (let i = 0; i < str.length; i++) {
        rotations.push(parseInt(str.slice(i) + str.slice(0, i)));
    }
    return rotations;
};

const isCircularPrime = n => getRotations(n).every(isPrime);

const countCircularPrimes = limit => {
    let count = 0;
    for (let i = 2; i <= limit; i++) if (isCircularPrime(i)) count++;
    return count;
};

// Example usage:
console.log(countCircularPrimes(100)); // Output the number of circular primes <= 100
