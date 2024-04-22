function rearrangeWords(text) {
    let hasDot = false;
    if (text.endsWith(".")) {
        hasDot = true;
        text = text.slice(0, -1); // Remove the dot from the text
    }

    // Split the input text into an array of words
    let words = text.split(" ");

    // Sort the array of words based on their lengths
    words.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length; // Sort by length
        } else {
            return words.indexOf(a) - words.indexOf(b); // Maintain original order if lengths are equal
        }
    });

    // Capitalize the first letter of the first word
    words[0] = words[0][0].toUpperCase() + words[0].substring(1);

    // Join the sorted array of words into a string
    let arrangedSentence = words.join(" ");

    // Add the dot back to the arranged sentence if it was present in the original text
    if (hasDot) {
        arrangedSentence += ".";
    }

    return arrangedSentence;
}

// Example usage:
let text1 = "Leetcode is cool.";
console.log(rearrangeWords(text1)); // Output: "Is cool Leetcode."

let text2 = "Keep calm and code on.";
console.log(rearrangeWords(text2)); // Output: "On and keep calm code."
