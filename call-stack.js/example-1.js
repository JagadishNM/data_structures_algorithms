// https://www.jsv9000.app/
// 1
console.log(2);
setTimeout(() => console.log(1), 0);
new Promise(res => {
  console.log(3)                // resolve is not called, so then will not execute. 4 will not be printed
}).then(() => console.log(4));
console.log(5);



// 2
console.log(2);
setTimeout(() => console.log(1), 0);
new Promise((resolve) => {
  console.log(3);
  resolve()                // resolve is called, so then will execute. 4 will be printed
}).then(() => console.log(4));
console.log(5);



// 3
console.log(2); //1
setTimeout(() => console.log(9), 100); //8
new Promise((resolve) => {
  console.log(3); //2
  resolve()               
}).then(() => console.log(4)); //5
setTimeout(() => console.log(1), 0); //7
new Promise((resolve) => {
    console.log(6); //3
    resolve()               
  }).then(() => console.log(8)); //6
console.log(5); //4