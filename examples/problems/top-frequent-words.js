// Count the frequency of each word using an object (hashmap).
// Sort the words by their frequency in descending order. For words with the same frequency, sort them lexicographically.
// Return the top k words from the sorted array.
// Code:
// javascript
// Copy code
function topKFrequent(words, k) {
    // Step 1: Count the frequency of each word
    const wordCount = {};
    for (const word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    // Step 2: Sort the words by frequency and then lexicographically
     const sortedWords = Object.keys(wordCount).sort((a, b) => {
        if (wordCount[b] === wordCount[a]) {
            return a.localeCompare(b); // Sort lexicographically if frequencies are the same
        }
        return wordCount[b] - wordCount[a]; // Sort by frequency in descending order
    });

    // Step 3: Return the top k words
    return sortedWords.slice(0, k);
}

// Example usage
const words = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"];
const k = 4;
console.log(topKFrequent(words, k)); // Output: ["the", "is", "sunny", "day"]
// Explanation:
// Counting frequencies:

// wordCount keeps track of how many times each word appears in the list.
// Sorting:

// Object.keys(wordCount) gets the unique words.
// .sort((a, b) => {...}) sorts the words:
// By frequency (wordCount[b] - wordCount[a] for descending order).
// By lexicographical order (a.localeCompare(b)) if frequencies are equal.
// Slicing the top k:

// slice(0, k) extracts the top k elements from the sorted list.