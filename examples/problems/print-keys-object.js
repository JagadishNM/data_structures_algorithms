// Code a function that prints all of the keys and values of the object in this manner ["key1.val1", "key1.val2", "key1.key2.val1"]

function printKeyValuePairs(obj, prefix = "") {
    for (let key in obj) {
      // Build the current key path
      const newKey = prefix ? `${prefix}.${key}` : key;
  
      if (typeof obj[key] === "object" && obj[key] !== null) {
        // Recursively call the function if the value is an object
        printKeyValuePairs(obj[key], newKey);
      } else {
        // If the value is not an object, print the key and value
        console.log(`${newKey}.${obj[key]}`);
      }
    }
  }
  
  // Example usage
  const sampleObject = {
    key1: {
      val1: 'value1',
      val2: 'value2',
      key2: {
        val1: 'value3'
      }
    }
  };
  
  printKeyValuePairs(sampleObject);

// Output: 
// key1.val1.value1
// key1.val2.value2
// key1.key2.val1.value3
