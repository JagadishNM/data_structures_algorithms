# Essential Data Structures and Algorithm Patterns for JavaScript Interview Preparation

*Generated on: 2025-09-05 03:39:29 UTC*  
*Created by: Madireddi Jagadish*

---

## **Core Data Structures**

### 1. **Arrays**
- Dynamic resizing, indexing
- Common methods: `push()`, `pop()`, `shift()`, `unshift()`, `slice()`, `splice()`
- Two-pointer technique, sliding window

### 2. **Strings**
- Immutability in JavaScript
- Methods: `substring()`, `charAt()`, `split()`, `replace()`, `match()`
- Pattern matching, palindromes

### 3. **Objects/Hash Maps**
- Key-value pairs, O(1) lookup
- `Map` vs plain objects
- Frequency counting, caching

### 4. **Sets**
- Unique values, O(1) operations
- `Set` methods: `add()`, `has()`, `delete()`
- Deduplication, intersection/union

### 5. **Linked Lists**
```javascript
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
```

### 6. **Stacks & Queues**
- Stack: LIFO using arrays or linked lists
- Queue: FIFO using arrays or linked lists
- Deque: double-ended queue

### 7. **Trees**
```javascript
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
```

### 8. **Graphs**
- Adjacency list representation
- Adjacency matrix
- Directed vs undirected

---

## **Essential Algorithm Patterns**

### 1. **Two Pointers**
- Same direction, opposite direction
- Fast/slow pointers (Floyd's cycle detection)

### 2. **Sliding Window**
- Fixed size and variable size windows
- Subarray/substring problems

### 3. **Binary Search**
```javascript
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

### 4. **Depth-First Search (DFS)**
```javascript
// Recursive
function dfs(node, visited) {
    if (!node || visited.has(node)) return;
    visited.add(node);
    // Process node
    for (let neighbor of node.neighbors) {
        dfs(neighbor, visited);
    }
}
```

### 5. **Breadth-First Search (BFS)**
```javascript
function bfs(start) {
    const queue = [start];
    const visited = new Set([start]);
    
    while (queue.length > 0) {
        const node = queue.shift();
        // Process node
        for (let neighbor of node.neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}
```

### 6. **Dynamic Programming**
- Memoization (top-down)
- Tabulation (bottom-up)
- Common patterns: Fibonacci, coin change, LCS

### 7. **Backtracking**
```javascript
function backtrack(path, options) {
    if (isComplete(path)) {
        results.push([...path]);
        return;
    }
    
    for (let option of options) {
        path.push(option);
        backtrack(path, getNewOptions());
        path.pop(); // backtrack
    }
}
```

### 8. **Greedy Algorithms**
- Local optimal choices
- Activity selection, interval scheduling

### 9. **Divide and Conquer**
- Merge sort, quick sort
- Binary search variations

---

## **Sorting Algorithms**

### 1. **Quick Sort**
```javascript
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}
```

### 2. **Merge Sort**
```javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    return result.concat(left.slice(i), right.slice(j));
}
```

### 3. **Heap Sort**
```javascript
function heapSort(arr) {
    buildMaxHeap(arr);
    
    for (let i = arr.length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, 0, i);
    }
    
    return arr;
}

function buildMaxHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, i, n);
    }
}

function heapify(arr, i, heapSize) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;
    
    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }
    
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }
    
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, largest, heapSize);
    }
}
```

---

## **Advanced Patterns**

### 1. **Trie (Prefix Tree)**
```javascript
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let current = this.root;
        for (let char of word) {
            if (!(char in current.children)) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }
    
    search(word) {
        let current = this.root;
        for (let char of word) {
            if (!(char in current.children)) {
                return false;
            }
            current = current.children[char];
        }
        return current.isEndOfWord;
    }
    
    startsWith(prefix) {
        let current = this.root;
        for (let char of prefix) {
            if (!(char in current.children)) {
                return false;
            }
            current = current.children[char];
        }
        return true;
    }
}
```

### 2. **Union-Find (Disjoint Set)**
```javascript
class UnionFind {
    constructor(n) {
        this.parent = Array.from({length: n}, (_, i) => i);
        this.rank = new Array(n).fill(0);
    }
    
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }
    
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        
        if (rootX !== rootY) {
            // Union by rank
            if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX]++;
            }
        }
    }
    
    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}
```

### 3. **Topological Sort**
```javascript
// Kahn's Algorithm (BFS-based)
function topologicalSort(graph) {
    const inDegree = new Array(graph.length).fill(0);
    const result = [];
    const queue = [];
    
    // Calculate in-degrees
    for (let i = 0; i < graph.length; i++) {
        for (let neighbor of graph[i]) {
            inDegree[neighbor]++;
        }
    }
    
    // Find all vertices with 0 in-degree
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    // Process vertices
    while (queue.length > 0) {
        const vertex = queue.shift();
        result.push(vertex);
        
        for (let neighbor of graph[vertex]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    return result.length === graph.length ? result : []; // Check for cycles
}

// DFS-based Topological Sort
function topologicalSortDFS(graph) {
    const visited = new Set();
    const result = [];
    
    function dfs(node) {
        if (visited.has(node)) return;
        visited.add(node);
        
        for (let neighbor of graph[node]) {
            dfs(neighbor);
        }
        
        result.unshift(node); // Add to front
    }
    
    for (let i = 0; i < graph.length; i++) {
        if (!visited.has(i)) {
            dfs(i);
        }
    }
    
    return result;
}
```

---

## **JavaScript-Specific Considerations**

### 1. **Array Methods to Master**
```javascript
// Higher-order functions
const doubled = arr.map(x => x * 2);
const evens = arr.filter(x => x % 2 === 0);
const sum = arr.reduce((acc, val) => acc + val, 0);
arr.forEach(item => console.log(item));

// Search methods
const found = arr.find(x => x > 10);
const index = arr.findIndex(x => x > 10);
const hasEven = arr.some(x => x % 2 === 0);
const allPositive = arr.every(x => x > 0);

// Sorting with custom comparator
arr.sort((a, b) => a - b); // Ascending numbers
arr.sort((a, b) => b - a); // Descending numbers
```

### 2. **String Methods**
```javascript
// Conversion methods
const chars = str.split('');
const joined = chars.join('');

// Character methods
const charCode = str.charCodeAt(0);
const char = String.fromCharCode(65); // 'A'

// Case methods
const lower = str.toLowerCase();
const upper = str.toUpperCase();

// Substring methods
const sub1 = str.substring(0, 3);
const sub2 = str.slice(-3);
```

### 3. **Modern JavaScript Features**
```javascript
// Destructuring
const [first, second, ...rest] = arr;
const {key1, key2, ...others} = obj;

// Spread operator
const merged = [...arr1, ...arr2];
const objCopy = {...originalObj, newKey: 'value'};

// Template literals
const message = `Hello ${name}, you have ${count} items`;

// Arrow functions
const square = x => x * x;
const add = (a, b) => a + b;

// Default parameters
function greet(name = 'World') {
    return `Hello, ${name}!`;
}

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
```

### 4. **Common JavaScript Patterns for Interviews**
```javascript
// Frequency counter
function charFrequency(str) {
    const freq = {};
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}

// Multiple pointers
function isPalindrome(str) {
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

// Sliding window - fixed size
function maxSumSubarray(arr, k) {
    let maxSum = -Infinity;
    let windowSum = 0;
    
    // Calculate sum of first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}

// Sliding window - variable size
function longestSubstringWithoutRepeating(s) {
    const seen = new Set();
    let left = 0, maxLength = 0;
    
    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }
        seen.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}
```

---

## **Time & Space Complexity Reference**

### **Common Time Complexities**
- **O(1)** - Constant: Hash table lookup, array access
- **O(log n)** - Logarithmic: Binary search, balanced tree operations
- **O(n)** - Linear: Single loop through array
- **O(n log n)** - Linearithmic: Efficient sorting (merge sort, heap sort)
- **O(n²)** - Quadratic: Nested loops, bubble sort
- **O(2ⁿ)** - Exponential: Recursive Fibonacci, subset generation

### **JavaScript Built-in Method Complexities**
```javascript
// Array methods
arr.push()          // O(1)
arr.pop()           // O(1)
arr.shift()         // O(n)
arr.unshift()       // O(n)
arr.splice()        // O(n)
arr.indexOf()       // O(n)
arr.includes()      // O(n)
arr.sort()          // O(n log n)

// Object/Map methods
obj[key]            // O(1) average
map.get(key)        // O(1)
map.set(key, val)   // O(1)
map.has(key)        // O(1)

// Set methods
set.add(val)        // O(1)
set.has(val)        // O(1)
set.delete(val)     // O(1)
```

---

## **Priority Order for Study**

### **🔥 High Priority (Study First)**
1. **Arrays & Two Pointers** - Foundation for many problems
2. **Hash Maps/Objects** - Essential for optimization
3. **Binary Search** - Must-know algorithm
4. **DFS/BFS** - Core tree/graph traversal
5. **Dynamic Programming basics** - Common in interviews

### **⚡ Medium Priority**
1. **Linked Lists** - Classic data structure questions
2. **Trees (BST operations)** - Tree traversal and manipulation
3. **Sliding Window** - Subarray/substring problems
4. **Backtracking** - Permutations, combinations
5. **Sorting algorithms** - Understanding different approaches

### **📚 Lower Priority (Advanced)**
1. **Graphs (advanced algorithms)** - Dijkstra, Floyd-Warshall
2. **Trie** - String processing problems
3. **Union-Find** - Connected components
4. **Segment Trees** - Range query problems
5. **Advanced DP patterns** - Complex optimization problems

---

## **Practice Resources**

### **Online Platforms**
- **[LeetCode](https://leetcode.com/)** - Start with Easy → Medium problems
- **[HackerRank](https://www.hackerrank.com/)** - JavaScript-specific challenges
- **[Codewars](https://www.codewars.com/)** - Daily practice with ranking system
- **[AlgoExpert](https://www.algoexpert.io/)** - Structured curriculum with video explanations

### **Problem Categories to Focus On**
1. **Arrays & Hashing** (20-25 problems)
2. **Two Pointers** (15 problems)
3. **Sliding Window** (10-15 problems)
4. **Stack** (10 problems)
5. **Binary Search** (15 problems)
6. **Linked List** (15 problems)
7. **Trees** (25 problems)
8. **Dynamic Programming** (20 problems)
9. **Backtracking** (10 problems)
10. **Graphs** (15 problems)

### **Study Schedule Recommendation**
- **Week 1-2**: Arrays, Hash Maps, Two Pointers
- **Week 3-4**: Sliding Window, Stack, Queue
- **Week 5-6**: Binary Search, Linked Lists
- **Week 7-8**: Trees (DFS, BFS)
- **Week 9-10**: Dynamic Programming
- **Week 11-12**: Graphs, Backtracking
- **Week 13+**: Advanced topics, mock interviews

---

## **Interview Tips**

### **Problem-Solving Approach**
1. **Understand the problem** - Ask clarifying questions
2. **Think about examples** - Walk through test cases
3. **Consider edge cases** - Empty inputs, single elements
4. **Discuss approach** - Explain your thinking
5. **Start with brute force** - Then optimize
6. **Code step by step** - Don't rush
7. **Test your solution** - Walk through examples
8. **Analyze complexity** - Time and space

### **Communication Tips**
- Think out loud
- Explain your reasoning
- Ask questions when stuck
- Be open to hints
- Admit when you don't know something

### **Common Mistakes to Avoid**
- Not handling edge cases
- Off-by-one errors in loops
- Forgetting to return values
- Modifying input when not allowed
- Not considering time/space complexity

---

*Remember: Practice consistently, understand the patterns, and focus on problem-solving approach rather than memorizing solutions!*

**Good luck with your JavaScript interviews! 🚀**
```
