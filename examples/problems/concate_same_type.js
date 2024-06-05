// [1, 'abc', {x: 'y'}, 2, 'def', {p: 'q'}, 3, 'ghi', {r: 's'}]

//  [6, 'abcdefghi', {x: 'y', p:'q', r:'s'}]

function concate(arr){
    return arr.reduce((acc,value) =>{
        if(typeof value === 'number' ){
            acc[0] =  (acc[0] || 0) + value;
        }else if(typeof value === 'string'){
            acc[1] = (acc[1] || '') + value;
        }else{
            acc[2] = { ...acc[2],...value, }
        }
        return acc;
    },[0,'',{}]);

    //return Object.values(result)
 }

 console.log(concate([1, 'abc', {x: 'y'}, 2, 'def', {p: 'q'}, 3, 'ghi', {r: 's'}]))

//  function concatenateSameTypeElements(arr) {
//     const result = {};
    
//     for (const item of arr) {
//         const itemType = typeof item;
//         if (itemType === 'number') {
//             if (!result.number) result.number = 0;
//             result.number += item;
//         } else if (itemType === 'string') {
//             if (!result.string) result.string = '';
//             result.string += item;
//         } else if (itemType === 'object' && !Array.isArray(item)) {
//             if (!result.object) result.object = {};
//             Object.assign(result.object, item);
//         }
//     }
    
//     return [result.number, result.string, result.object];
// }