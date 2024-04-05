function removeDupes(arr){
    let result = [];
  let previous = arr[0];
  result[0] = previous;

        for(let i = 0; i < arr.length; i++) {
    
            if (arr[i] != previous) {
              result.push(arr[i]);
            }
            
            previous = arr[i];
    }

    return result;
}

const arr = [1, 1, 1, 1, 1, 1, 1];

console.log(removeDupes(arr)); // prints [1]