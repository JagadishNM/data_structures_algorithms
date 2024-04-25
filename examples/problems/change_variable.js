function convertVariableName(variableName) {
    if (variableName.includes('_')) {
        // Convert from C++ to Java
        return variableName.split('_').map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
    } else {
        // Convert from Java to C++
        return variableName.replace(/[A-Z]/g, match => '_' + match.toLowerCase());
    }
}

console.log(convertVariableName('the_variable_name'))
console.log(convertVariableName('theVariableName'))

// Variables in any programming language should be named in such a way that the name
// itself clarifies its purpose. However, we cannot have a variable name having multiple
// words separated by space. Therefore, we use different approaches of defining variable
// names as given below:
// In C++: this is a variable
// In Java: thislsAVariable
// Your task is to convert a C++ variable name into a Java variable name and vice versa
// and then return the converted variable name.
// Note: Assume that a Java variable name never contains "" before any alphabet. In other words, if the
// given variable name contains "" before any alphabet, treat the given variable name as a C++ variable
// name and generate the output as a Java variable name and vice versa.
// Input Specification:
// input1: A string value representing the variable name
// Output Specification:
// Output: Return a string value containing the transformed variable name.
// Example 1:
// input1: modify variableName