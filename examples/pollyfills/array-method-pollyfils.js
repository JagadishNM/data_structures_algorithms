//https://dev.to/srishtikprasad/polyfill-in-javascript-mapfilterreduce-2d38

// Step 1: Check if Array.prototype.map is not available
if (!Array.prototype.map) {
  
    // Step 2: Define the map function as a polyfill
    Array.prototype.myMap = function(callback){
        let temp=[];
    for(let i=0;i<this.length;i++)
    {
        temp.push(callback(this[i],i,this));
    }
    return temp;
    }
    
  }
  
  // Example Usage:
  const nums1=[1,2,3,4];
const multiply=nums1.myMap((x)=>{
    return x*2;
})
console.log(multiply);

// Filter

Array.prototype.myFilter = function(callback){
    let temp=[];
    for(let i=0;i<this.length;i++)
    {
        if(callback(this[i],i,this))
            temp.push(this[i]);
    }
    return temp;
}
//Performing filter method through custom made filter called myFilter
const nums2=[1,2,3,4];
const FilterOdd=nums2.myFilter((x)=>{
   return x%2;
})
console.log(FilterOdd);

// Reduce

Array.prototype.myReduce=function(callback,initial_value){
    var acc=initial_value;
    for(let i=0;i<this.length;i++)
    {
        acc = acc? callback(acc,this[i],i,this) : this[i];
    }
    return acc;

}
//Performing reduce method through custom made reduce called myReduce
const nums3=[1,2,3,4];
const sum=nums3.myReduce((acc,curr,i,nums)=>{
   return acc+curr;
},0);
console.log(sum)