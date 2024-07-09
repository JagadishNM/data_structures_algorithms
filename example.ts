// https://leetcode.com/discuss/interview-question/570407/salesforce-oa-hackerrank
console.log(receiveInputs([25, 50], [5, 4], 35));
console.log(receiveInputs([100, 500], [18, 15.50], 2000));

function receiveInputs(instances: number[], pricing: number[], ask: number): number{
    let find=0;
    if(ask>=instances[instances.length-1]){
        return extraPolate(instances, pricing, ask);
    }
        for(let i=0;i<instances.length-1;i++){
        if(instances[i]<=ask && instances[i+1]>=ask){
            find = i+1;
        }
        return interpolate(instances, pricing , ask, find);
        }
        return -1;
    }
   
function interpolate(instances: number[], pricing: number[], ask: number, find :number): number{
    const diff = instances[find] - instances[find-1];
    const lowerB = ask-instances[find-1];
    const gcdval = gcd(diff, lowerB);
    const priceDiff = Math.abs(pricing[find]-pricing[find-1]);
    const pricePerSmallUnit = priceDiff/parseInt((diff/gcdval).toFixed(2));

    return  pricing[find-1] - (lowerB/gcdval)*pricePerSmallUnit;
}
function extraPolate(instances: number[], pricing: number[], ask: number): number {
 const diff = instances[instances.length-1] - instances[instances.length-2];
    const higherB = ask-instances[instances.length-1];
    const gcdval = gcd(diff, higherB);
    const priceDiff = Math.abs(pricing[instances.length-1]-pricing[instances.length-2]);
      const pricePerSmallUnit = priceDiff/parseInt((diff/gcdval).toFixed(2));

    return pricing[instances.length-1] - (higherB/gcdval)*pricePerSmallUnit;
} 

function gcd(low: number, high: number): number {
    if(low>high){
        gcd(high, low);
    }
if(high%low === 0){
    return low;
}
return gcd(high%low, low);
}