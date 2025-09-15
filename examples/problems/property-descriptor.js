let obj = {
    name: 'Jagadish',
    city: 'NSP'
}

console.log(Object.getOwnPropertyDescriptor(obj,'name'));
console.log(Object.getOwnPropertyDescriptors(obj));
console.log(Reflect.ownKeys(obj)
let obj2 = {};
Object.defineProperty(obj2, 'x',{writable: true, configurable: true, enumerable: true, value: 5});
console.log(obj2);

let obj3 = Object.defineProperties({},{
    x: { value: 1, writable: true, enumerable: true, configurable: true },
    y: { value: 1, writable: true, enumerable: true, configurable: true },
    r: {
        get() { return Math.sqrt(this.x*this.x + this.y*this.y); },
        enumerable: true,
        configurable: true
    }
});

console.log(obj3)
