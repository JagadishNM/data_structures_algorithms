class HashMap {
    constructor() {
      this.map = {};
    }
  
    put(key, value) {
      this.map[key] = value;
    }
  
    get(key) {
      return this.map[key];
    }
  
    remove(key) {
      if (this.map.hasOwnProperty(key)) {
        delete this.map[key];
      }
    }
  }

//   Question:
// Implement a basic hash map.

// Explanation:
// The HashMap class provides basic hash map functionality by allowing key-value pairs to be inserted (put), retrieved (get), and removed (remove).

// Time Complexity:
// O(1) average for put, get, and remove