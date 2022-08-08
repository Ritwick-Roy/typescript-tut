"use strict";
const input = document.querySelectorAll('input');
let age = 30;
console.log(age);
age = 1;
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(1));
//arrays
let names = ['luigi', 'mario', 'yoshi'];
names.push('bowser'); //same type
let numbers = [10, 30, 20];
// numbers.push('2'); //error
numbers.push(12);
let mixed = [2, '2'];
mixed.push('3');
mixed.push(3);
// mixed.push(true); //error again
//objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age='30' //error
// ninja.skills=['fighting','sneaking'] //cant add more to object
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40 //on removing this, error
};
//explicit types
let character;
let years;
let loggedIn;
//arrays
let ninjas = [];
ninjas.push('bowser');
//union types
let mixedArray = [];
mixedArray.push(10);
mixedArray.push('10');
// mixedArray.push(true); //error
let uid;
uid = '3';
uid = 3;
// uid=true; //error
//objects
let ninjaOne;
ninjaOne = {
    name: 'yoshi',
    age: 30,
};
ninjaOne = [];
// ninjaOne='s' //error
let ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColor: 'black'
};
//dynamic types
let ageDynamic = 25; //rarely used tho
ageDynamic = true;
let mixedDynamic = [];
mixedDynamic.push(5);
mixedDynamic.push('5');
mixedDynamic.push(true);
let ninjaDynamic;
//functions
let greet;
// greet='hello'
greet = () => {
    console.log('hello');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
};
add(10, 5);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 3);
const greetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
const greetYetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
//removes code duplication
//function signatures
let gree;
gree = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc; //kinda like protoype
calc = (a, b, c) => {
    if (c === 'add')
        return a + b;
    else if (c == 'subtract')
        return a - b;
    else if (c == 'mult')
        return a * b;
    return a / b;
};
console.log(calc(20, 4, '/'));
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
