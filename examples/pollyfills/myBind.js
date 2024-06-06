Function.prototype.myBind = function(obj, ...args){
    const func = this;
    return function(...newArgs){        
        func.apply(obj, [...args, ...newArgs]);
    }
}

const myName = {
    firstName: 'Jagadish',
    lastName: 'M'
}

function printName(id, city){
    console.log(this.firstName+' '+ this.lastName+' '+id+ ' ' +city)
}

const result2 = printName.myBind(myName, "a_random_id");
result2("New York");