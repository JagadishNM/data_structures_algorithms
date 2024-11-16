function mask(num){
    return num.slice(0, -4).replace(/\d/g, '*') + num.slice(-4);
}

let creadicard = "4761 6400 2688 3566";

console.log(mask(creadicard)); // output: **** **** **** 3566
