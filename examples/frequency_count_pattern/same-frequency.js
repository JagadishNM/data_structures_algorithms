// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N)


function sameFrequency(num1, num2) {
  const str1 = `${num1}`;
  const str2 = `${num2}`;

  if (str1.length !== str2.length) return false;

  const obj = {};

  for (const char of str1) {
    obj[char] = (obj[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!obj[char]) return false;
    obj[char]--;
  }

  return true;
}
sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
