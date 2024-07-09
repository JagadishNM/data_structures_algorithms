const P1 = new Promise((resolve, reject) =>{
    resolve(2)
})

const P2 = new Promise((resolve, reject) =>{
    resolve(2)
})

let addTwoPromises = async function(promise1, promise2) {
    //return (await promise1)+(await promise2);
    return promise1.then(v1 => promise2.then(v2 => v1+v2));
};

addTwoPromises(P1,P2)