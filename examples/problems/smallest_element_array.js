// find kth smallest element in an unsorted array in Binary Search

// https://www.geeksforgeeks.org/kth-smallest-largest-element-in-unsorted-array/

function count(nums, middle){
    let cnt  = 0;
    for(let i =0; i<nums.length;i++){
        if(nums[i] <= middle){
            cnt++;
        }
    }
    return cnt ;
}

function kthSmallest(nums, k){
    let low = Number.MIN_VALUE;
    let high = Number.MAX_VALUE;

    for(let i=0; i<nums.length; i++){
        low = Math.min(nums[i], low);
        high = Math.max(nums[i], high);
    }

    while(low < high){
        const middle = Math.floor(low + ((high - low)/2));

        if(count(nums, middle) < k){
            low = middle + 1;
        }else{
            high = middle;
        }
    }

    return low;
}

var k = 2;
var nums = [1, 4, 5, 2, 19, 3];
console.log(kthSmallest(nums, k))