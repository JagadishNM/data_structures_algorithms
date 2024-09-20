function customStringify(obj) {
    if (typeof obj === "string") {
      return `"${obj}"`;  // Add quotes around strings
    }
  
    if (typeof obj === "number" || typeof obj === "boolean" || obj === null) {
      return String(obj); // Convert numbers, booleans, and null to string
    }
  
    if (Array.isArray(obj)) {
      // Handle arrays by recursively stringifying each element
      let arrElements = obj.map(element => customStringify(element));
      return `[${arrElements.join(",")}]`;
    }
  
    if (typeof obj === "object") {
      let objectProps = [];
      
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          let keyValueString = `"${key}":${customStringify(obj[key])}`;
          objectProps.push(keyValueString);
        }
      }
      
      return `{${objectProps.join(",")}}`;  // Join the key-value pairs with commas and wrap in braces
    }
  
    return undefined; // If an unsupported type, return undefined
  }
  
  // Example usage:
  const sampleObject = {
    key1: "value1",
    key2: 42,
    key3: true,
    key4: [1, "test", false],
    key5: { nestedKey: "nestedValue" }
  };
  
  console.log(customStringify(sampleObject));

//   Output:
//   {"key1":"value1","key2":42,"key3":true,"key4":[1,"test",false],"key5":{"nestedKey":"nestedValue"}}
