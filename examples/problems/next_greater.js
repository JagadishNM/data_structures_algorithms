function findNext(number, n) 
{ 
      
    // Start from the right most digit  
    // and find the first digit that is 
    // smaller than the digit next to it 
    let i = 0; 
    for(i = n - 1; i >= 0; i--) 
    { 
        if (number[i] > number[i - 1]) 
            break; 
    } 
      
    // If no such digit found,then all  
    // numbers are in descending order, 
    // no greater number is possible 
    if (i == 1 && number[i] <= number[i - 1]) 
    { 
        console.log("Next number not possible"); 
        return; 
    }    
      
    // Find the smallest digit on the 
    // right side of (i-1)'th digit 
    // that is greater than number[i-1] 
    let x = number[i - 1]; 
    let smallest = i; 
      
    for(let j = i + 1; j < n; j++) 
    { 
        if (number[j] > x &&  
            number[j] < number[smallest]) 
        smallest = j; 
    } 
      
    // Swapping the above found smallest  
    // digit with (i-1)'th 
    let temp = number[smallest]; 
    number[smallest] = number[i - 1]; 
    number[i - 1] = temp; 
      
    // X is the final number, in integer datatype  
    x = 0 
      
    // Converting list upto i-1 into number 
    for(let j = 0; j < i; j++) 
        x = x * 10 + number[j]; 
      
    // Sort the digits after i-1 in ascending order 
    number = number.slice(i, number.length + 1); 
    number.sort() 
      
    // Converting the remaining sorted 
    // digits into number 
    for(let j = 0; j < n - i; j++) 
        x = x * 10 + number[j]; 
      
    console.log("Next number with " +  
                   "set of digits is " + x); 
} 
  
// Driver code 
let digits = "534976"       
  
// Converting into integer array, 
// number becomes [5,3,4,9,7,6] 
let number = [] 
for(let i = 0; i < digits.length; i++) 
    number[i] = Number(digits[i]); 
  
findNext(number, digits.length); 