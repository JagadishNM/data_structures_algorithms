function cumulativeSum(arr){
    let result = [arr[0]];

    for(let i = 1; i < arr.length; i++){
        result.push(arr[i] + arr[i-1])
    }

    return result;
}

let arr = [1,3,5,7];
console.log(cumulativeSum(arr));  // Returns [1, 4, 9, 16]

//Return an array showing the cumulative sum at each index of an array of integers