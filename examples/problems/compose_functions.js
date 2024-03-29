// https://medium.com/@akhilanand.ak01/function-composition-in-javascript-exploring-the-power-of-compose-4114da8b9875#:~:text=In%20functional%20programming%2C%20function%20composition,role%20in%20enabling%20function%20composition.

const add = arg => arg + 5;
const multiple = arg => arg * 3;
const sub = arg => arg - 2;

const compose = (...functions) => {
    return (initialInput) =>{
        return functions.reduceRight((acc, fn) =>{
            return fn(acc)
        }, initialInput)
    }
}

const composedFunction  = compose(add, multiple, sub);

const result = composedFunction(7)

console.log(result)
