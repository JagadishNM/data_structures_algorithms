// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration(seconds) {
    if (seconds === 0) return "now";

    const timeUnits = [
        { unit: "year", seconds: 365 * 24 * 60 * 60 },
        { unit: "day", seconds: 24 * 60 * 60 },
        { unit: "hour", seconds: 60 * 60 },
        { unit: "minute", seconds: 60 },
        { unit: "second", seconds: 1 }
    ];

    const result = [];

    for (let { unit, seconds: unitSeconds } of timeUnits) {
        const amount = Math.floor(seconds / unitSeconds);
        if (amount > 0) {
            result.push(`${amount} ${unit}${amount > 1 ? "s" : ""}`);
            seconds -= amount * unitSeconds;
        }
    }

    const last = result.pop();
    return result.length ? result.join(", ") + " and " + last : last;
}

// Example usage:
console.log(formatDuration(62));     // "1 minute and 2 seconds"
console.log(formatDuration(3662));   // "1 hour, 1 minute and 2 seconds"
console.log(formatDuration(0));      // "now"