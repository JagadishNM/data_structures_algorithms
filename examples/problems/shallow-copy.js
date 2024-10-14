function shallowCopyDSA(obj) {
    // Initialize the stack to handle objects and arrays
    const stack = [{ source: obj, target: Array.isArray(obj) ? [] : {} }];
  
    const result = stack[0].target;
  
    while (stack.length > 0) {
      // Pop the last element (DFS-like approach)
      const { source, target } = stack.pop();
  
      // Iterate through all keys of the current object
      for (let key in source) {
        if (source.hasOwnProperty(key)) {
          // If the value is an object or array, just assign the reference (shallow copy)
          if (typeof source[key] === "object" && source[key] !== null) {
            target[key] = source[key]; // Shallow copy (reference)
          } else {
            // For primitive values, copy the actual value
            target[key] = source[key];
          }
        }
      }
    }
  
    return result;
  }
  
  // Example Usage:
  
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: [3, 4]
    },
    e: [5, 6]
  };
  
  const copiedObj = shallowCopyDSA(obj);
  
  // Modify original object to test the shallow copy
  obj.b.c = 20;
  obj.e[0] = 50;
  
  console.log("Original Object:", obj);
  // Output: { a: 1, b: { c: 20, d: [ 3, 4 ] }, e: [ 50, 6 ] }
  
  console.log("Shallow Copied Object:", copiedObj);
  // Output: { a: 1, b: { c: 20, d: [ 3, 4 ] }, e: [ 50, 6 ] }
  