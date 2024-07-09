const myTimer = (function(){
    let count = 0;
    let interval = null;
    return {
        start(){
            if(!interval){
                interval = setInterval(() =>{
                    count += 1;
                    console.log(count)
                },1000)
            }
        },

        pause(){
            if(interval){
                clearInterval(interval);
                interval = null;
            }
        },
        reset(){
            clearInterval(interval);
            interval = null;
            count = 0;
        }
    }
})();

myTimer.start();

setTimeout(() =>{
    myTimer.pause();
},5000)

setTimeout(() =>{

    myTimer.start();
},15000)

setTimeout(() =>{

    myTimer.reset();
},20000)