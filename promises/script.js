const button  = document.getElementById("alarm-call");
const text  = document.getElementById("text");

function alarm(name, delay){
    return new Promise((resolve, reject) =>{
        if(delay < 0){
            throw new Error('delay shoulld not be nagative number');
        }

        setTimeout(() =>{
            resolve(`Hi ${name}`)
        }, delay)
    })
}

// button.addEventListener('click', () =>{
//     alarm('Jagadish', 1000).then((res) =>{
//         text.textContent = res;
//     })
// })

button.addEventListener('click', async () =>{
    const res = await alarm('Jagadish', 1000);
    text.textContent = res;
})