function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      return obj.map(item => deepCopy(item));
    }
  
    const copy = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
    return copy;
  }
  
  const original = { name: "John", address: { city: "New York" } };
  const deepCopyObj = deepCopy(original);
  
  deepCopyObj.address.city = "Los Angeles";
  console.log(original.address.city); // Output: "New York"
  