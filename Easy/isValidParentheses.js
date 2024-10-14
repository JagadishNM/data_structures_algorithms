function isValidParentheses(s) {
    const stack = [];
    const pairs = { '(': ')', '{': '}', '[': ']' };
    for (const char of s) {
      if (char in pairs) {
        stack.push(char);
      } else if (
        char === ")" ||
        char === "]" ||
        char === "}"
    ) {
        if (pairs[stack.pop()] !== char) {
            return false;
        }
      }
    }
    return stack.length === 0;
  }
  
  console.log(isValidParentheses("{[()]}"));  // Output: true

//   Validate Parentheses
// Question:
// Given a string containing ‘(‘, ‘)’, ‘{‘, ‘}’, ‘[‘ and ‘]’, determine if the input string is valid.
// It uses a stack to check if parentheses are balanced in an expression.

// Question:
// Check if a given expression has balanced parentheses.
// Explanation:
// This function uses a stack to determine whether parentheses in an expression are balanced, 
// guaranteeing that each opening parenthesis has a corresponding closing parenthesis.