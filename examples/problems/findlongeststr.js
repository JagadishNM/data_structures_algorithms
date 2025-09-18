function findLongeststr(arr){
    return arr.reduce((acc, val) =>{
        if(val.length > acc.length){
            return val;
        }else{
            return acc;
        }
    },"")
}

findLongeststr(['apple', 'elephant', 'dog', 'giraffe'])