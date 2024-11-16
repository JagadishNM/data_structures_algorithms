function add(num){
    let sum = num;

    function inner(nextNum){
        if(nextNum !== undefined){
            sum += nextNum;
            return inner;
        }else{
            return sum;
        }
    }

    return inner;
}

console.log(add(2)(3)(4)()) // 9
console.log(add(5)(3)(2)()) // 10