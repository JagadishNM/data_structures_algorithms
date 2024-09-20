function printAdditionFunc(x, y) {
	var addNumbers = function () {
		result = x + y;
		console.log("Addition of " + x + " and " + y + " is: " + result);
	}
    
	// Returns a function
	return addNumbers
}

// printAdditionFunc returns the function addNumbers which gets assigned to addNumbersFunc
var addNumbersFunc = printAdditionFunc(3, 4)
// This is a function
console.log(addNumbersFunc)

addNumbersFunc()