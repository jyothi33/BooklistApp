const url = "google.com";
let cars = ["BMW", "MARUTI", "HYUNDAI"];

for (let x of cars) {
  //console.log(x);
}
function myFun(x, y = 10) {
  console.log(x + y);
}
//myFun(5);

function sum(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

let x = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(x);

function func(value, index, arra) {
  return value > 4;
}
let numbers = [2, 4, 6, 8];
let first = numbers.findIndex(func);
//console.log(first)

//console.log(" "+ Number.isInteger(10));
//console.log(" "+ Number.isInteger(10.5));
// console.log(" "+ Number.isSafeInteger(1046654647326472366356564327494538596858546985658));
const getUserInput = (eve) => console.log(eve.target.value);

//console.log(isFinite(10/0))
//console.log(isFinite(10/1))
//console.log(isNaN("10"))

let str = "Stars on the Sky!";
let n = 10;
//console.log(str + " , \"Sky is blue\"" + n);
//console.log(`${str} , 'Sky is blue' ${n}`)

let fruits = ["apple", "mango", "grapes"];
let anotherFruits = ["cherry"];
let totalFruits = [...fruits, "pineapple", "jackfruit", ...anotherFruits];
//console.log(`Total Fruits in my basket ${totalFruits}`)
//console.log(Array.isArray(n))
//console.log(fruits.concat(anotherFruits, "banana"));
let person = { name: "Peter", age: 28 };
let { name, age } = person;
//console.log(`${name}`);

let states = ["karnataka", "Delhi", "TamilNadu"];
//states.push("Mumbai")
//states.unshift("Andra");
//console.log(states)
//states.splice(1,2)
states.slice(1);
//console.log(`${states.slice(1, 2)} `);
