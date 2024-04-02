Function.prototype.myBind = function(...args){
    const callback = this;
    const params = args.splice(1);
    return function(...args2){        
        callback.apply(args[0], [...params, ...args2]);
    }
}

const myName = {
    firstName: 'Jagadish',
    lastName: 'M'
}

function printName(arg1, arg2){
    console.log(this.firstName+' '+ this.lastName+' '+arg1+ ' ' +arg2)
}

const result2 = printName.myBind(myName, "Palia",'');
result2("India");