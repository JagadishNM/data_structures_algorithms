// Sundays on the 1st of a month
// A leap year is an year in which the month of February has 29 days. If a year is divisible by 4, it is typically a leap year. However, if the year is also divisible by 100, it is not a leap year. But when the year is divisible by 400, it is a leap year.
// April, June, September and November have 30 days. January, March, May, July, August, October and December have 31 days.
// 1st Jan 1900 was a Monday.
// Write a program to find out how many Sundays fell on the first of the month for a given year which is greater than or equal to 1900.

function isLeapYear(year) {
    if (year % 4 !== 0) return false;
    if (year % 100 !== 0) return true;
    if (year % 400 !== 0) return false;
    return true;
}

function countSundays(year) {
    let count = 0;
    let dayOfWeek = 1; // 1st Jan 1900 was a Monday

    // Loop through years starting from 1900 up to the given year
    for (let y = 1900; y <= year; y++) {
        const months = [31, isLeapYear(y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        for (let m = 0; m < 12; m++) {
            if (dayOfWeek % 7 === 0 && y > 1900) count++; // 1st of the month is a Sunday and year is greater than 1900
            dayOfWeek += months[m];
        }
    }
    return count;
}

// Example usage:
let year = 2000; // You can change this to any year greater than or equal to 1900
console.log(countSundays(year)); // Output the number of Sundays on the 1st of the month for the given year

// A function isLeapYear to determine if a year is a leap year.
// A function countSundays to count how many Sundays fell on the first of the month from 1900 to the given year.
// You can run this script in a JavaScript environment and change the year variable to the desired year.