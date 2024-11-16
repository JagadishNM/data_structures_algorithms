console.log(x);

let x = 2;


//add(5)(6)(7)....();

function add(num) {
    // Accumulate the sum in a variable
    let sum = num;
  
    // Define a function that takes another number as input
    function inner(nextNum) {
      if (nextNum !== undefined) {
        // Add the new number to the accumulated sum
        sum += nextNum;
        // Return the same function to allow chaining
        return inner;
      } else {
        // If no number is provided, return the final sum
        return sum;
      }
    }
  
    // Return the inner function, which can accept more numbers or end with ()
    return inner;
  }
  
  // Usage examples:
  console.log(add(5)(6)(7)()); // Output: 18
  console.log(add(10)(20)(30)(40)()); // Output: 100
  console.log(add(1)(2)(3)(4)(5)()); // Output: 15

let unicCunter = (function(){
	let counter = 0;
  return function (){ return counter++;}
})();

unicCunter();


const a = {name: "harish"};
const b = a;

b.name = "girish";

console.log(a,b)

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function print(value){
setTimeout(() => console.log(value), 1000);
}
for (var i = 0; i < 10; i++) {
  print(b[i])
}

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000); // 10 times undefined
}



console.log('start'); 1

setTimeout(function() {
    console.log('setTimeout'); 4
}, 0);


Promise.resolve(123).then(function(res) {
    console.log(res); 3
})

console.log('end') 2

Array.prototye.myMap = function (callBack){
let arr = [];
	for(let i =0; i < this.length; i++){
  	arr.push(callBack(i, this))
  }
  return arr;
}


S --> Service


A -> provide : S
|
B -> provide : S
|
C -> provide : S

let obs = new Observable(() =>{
	
})

let sub = new Subject();
sub.next(2);

sub.subscribe(() =>{

})

@Directive({
name: 'ngif'
})



class ngif{
@Input ngif: boolen;
	constructor(private viewref: ViewContainerref, private template: Templateref){
  	if(ngif){
    viewref.embededView()
    }
    viewref.clear
  }
}




