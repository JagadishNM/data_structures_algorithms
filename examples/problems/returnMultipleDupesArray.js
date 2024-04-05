const returnMultipleDupesArray = (arr) => {
  let observed = {};
  let dupesArray = [];
  
  for(let i = 0; i < arr.length; i++) {
 
    if(observed[arr[i]]) {
      if(observed[arr[i]] === 1) {
        dupesArray.push(arr[i]);
      }
      
      observed[arr[i]] = (observed[arr[i]] || 0) + 1;
    } else {
      observed[arr[i]] = 1;
    }
  }
  
  return dupesArray;
}

const arr = [1,1,2,3,4,5,6,7,8,6,6,7,7,7,10,10];

console.log(returnMultipleDupesArray(arr)); // prints [1, 6, 7, 10]

//Return: array — containing all duplicates found or empty array if none are found