// https://www.codewars.com/kata/5b18e9e06aefb52e1d0001e9/train/javascript

function riders(stations) {
    if(stations.length === 0) return 0;
    // Your code here!
    let distance = 0;
    let riders = 1;
    for(let i = 0; i < stations.length;i++){
      
      if(distance + stations[i] <= 100){
        distance += stations[i];
      }else{
        riders++;
        distance = stations[i];
      }
      }
    
    return riders;
  }

  const Test = require('@codewars/test-compat');

describe("Sample Tests", function() {

  it("ex", function() {
    Test.assertEquals(riders([18, 15]), 1);
    Test.assertEquals(riders([43, 23, 40, 13]), 2);
    Test.assertEquals(riders([33, 8, 16, 47, 30, 30, 46]), 3);
    Test.assertEquals(riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49]), 4);
  });
  
});