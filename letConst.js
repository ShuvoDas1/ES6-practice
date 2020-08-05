// unchanged variable
const bow ="omuk";
console.log(bow);

// Full Array can't change in const variable

const numbers = [10,120,22];
numbers.push(11);
numbers.pop();
// numbers = ['shuvo','sakib','rakib'];//Not possiable const variable
console.log(numbers);

let sum = 0;
for(let i =0;i<10;i++){
    sum = sum + i;
}
console.log(i);//Error let is not lecks.