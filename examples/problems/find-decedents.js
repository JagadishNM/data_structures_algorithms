const input = {
    'A': { startsAfter: [] },
    'B': { startsAfter: ['A'] },
    'C': { startsAfter: ['A'] },
    'D': { startsAfter: ['C'] }
};

// Function to find all descendants of a given node
function findDescendants(node, graph) {
    const descendants = new Set();

    function dfs(current) {
        for (const [key, value] of Object.entries(graph)) {
            if (value.startsAfter.includes(current) && !descendants.has(key)) {
                descendants.add(key);
                dfs(key); // Recursively find further descendants
            }
        }
    }

    dfs(node);
    return Array.from(descendants);
}

// Example usage
console.log(findDescendants('C', input));
