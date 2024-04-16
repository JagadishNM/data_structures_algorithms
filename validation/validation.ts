//• Name should be only letters and spaces with 20 chars max

function validateName(name: string) {
    // Regular expression to match only letters and spaces, with a maximum of 20 characters
    const nameRegex = /^[a-zA-Z\s]{1,20}$/;
    return nameRegex.test(name);
  }
  
  // Example usage:
  console.log(validateName("John Doe")); // true
  console.log(validateName("John-Doe")); // false (contains hyphen)
  console.log(validateName("John Doe Smith Jr.")); // false (more than 20 characters)
  

  //• Mobile filed should be numbers with 10 chars min and max

  function validateMobile(mobile) {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
  }
  
  // Example usage:
  console.log(validateMobile("1234567890")); // true
  console.log(validateMobile("123456"));    // false (less than 10 characters)
  console.log(validateMobile("12345678901")); // false (more than 10 characters)
  console.log(validateMobile("12a4567890")); // false (contains non-numeric characters)


  //• Email should be letters or dots with 3 to 20 characters before @ and 5 to 15 chars after @ and 2 to 10 characters after dot(.) 
  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z\.]{3,20}@[a-zA-Z]{5,15}\.[a-zA-Z]{2,10}$/;
    return emailRegex.test(email);
  }
  
  // Example usage:
  console.log(validateEmail("example.email@example.com"));  // true
  console.log(validateEmail("ex.ample@example.com"));       // false (less than 3 characters before @)
  console.log(validateEmail("example@example.com"));       // false (less than 5 characters after @)
  console.log(validateEmail("example@example.co.uk"));     // true
  console.log(validateEmail("example@example.company"));   // false (more than 10 characters after dot)
  