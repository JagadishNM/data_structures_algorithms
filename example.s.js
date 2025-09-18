// Example 2:

// Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4

// Output: ["the", "is", "sunny", "day"]

// Explanation: "the", "is", "sunny" and "day" are the four most frequent words


//     Given a non-empty list of words, return the k most frequent elements.

 

// Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then words can be in any order.

function findRepeatedWords(arr){
    let result = [];
   

   
}

findRepeatedWords(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"])


// Find all subarrays matching target

 // Input= {1,7,4,3,1,2,1,5,1};

 // Target=7

 // Output=[1,1],[2,3],[3,6],[6,8]

 function findSubarray(arr, target){
    let result = [];
    let sum = 0;

    let i = 0;
    let j = 1;

    
        
    while(i < arr.length && j < arr.length){
        arr[i] += arr[j];

        if(sum === target){   
            result.push([i, j])
            i += 1;
            j = arr[i] + 1;
        }else if(sum > target){
            i += 1;
            j = arr[i] + 1;
        }
    }

    return result;
    
}

findSubarray([1,7,4,3,1,2,1,5,1], 7);