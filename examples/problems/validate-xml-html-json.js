function validateHTML(htmlString) {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, "text/html");
  
      // If there are parsing errors, they usually appear in <parsererror> elements
      if (doc.querySelector("parsererror")) {
        return false; // Invalid HTML
      }
      return true; // Valid HTML
    } catch (e) {
      return false;
    }
  }
  
  // Example usage:
  console.log(validateHTML("<div>Valid HTML</div>")); // true
  console.log(validateHTML("<div>Invalid HTML")); // false
  

  function validateXML(xmlString) {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(xmlString, "application/xml");
  
      // Look for <parsererror> in the output
      if (doc.querySelector("parsererror")) {
        return false; // Invalid XML
      }
      return true; // Valid XML
    } catch (e) {
      return false;
    }
  }
  
  // Example usage:
  console.log(validateXML("<note><to>Tove</to></note>")); // true
  console.log(validateXML("<note><to>Tove</to>")); // false

  
  function validateJSON(jsonString) {
    try {
      JSON.parse(jsonString);
      return true; // Valid JSON
    } catch (e) {
      return false; // Invalid JSON
    }
  }
  
  // Example usage:
  console.log(validateJSON('{"name": "John", "age": 30}')); // true
  console.log(validateJSON('{"name": "John", "age": }')); // false
  