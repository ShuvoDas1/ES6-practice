// Normal way to declare function
// function doubleIt(num){
//     return num*2;
// }

//Another way to declare function
// const doubleIt = function(num){
//     return num * 2;
// }

//ES6 update way to declare function
//Arrow Function
const doubleIt = num => num * 2; //Single parameter
const add = (x,y,z) => x + y + z; // More than one parameter
const give10 = () => 10; // No parameter

// Use curly brackets in multiple statement in a function
// must return value
const doMath = (x,y) => {
    const sum =  x+y;
    const diff =  x-y;
    const result =  sum * diff;
    return result ;
}

// let result1 = add(10,20,30);
let result2 = give10();
const result3 = doMath(5,5);

console.log(result3);