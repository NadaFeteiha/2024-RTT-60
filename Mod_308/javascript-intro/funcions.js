//Functions 
// Lesson: https://ps-react-curriculum.herokuapp.com/308H/5/lesson

const sum = (a, b) => a + b;

//function call
sum(1, 2);

// 1.Function Declaration
function sayHello(name) {
    console.log('Hello ' + name + '!');
}
sayHello('World');

//========================================

// 2.Function Expression
const sayHello1 = function (name) {
    console.log('Hello ' + name + '!');
}
sayHello1('World');

//========================================

// 3.Arrow Function
const sayHello2 = (name) => {
    console.log('Hello ' + name + '!');
}
sayHello2('World');

//========================================

// 4. Default Parameters
function sayHello4(name = 'World') {
    console.log('Hello ' + name + '!');
}
sayHello4();

//========================================

// 5. Rest Parameters
function sum5(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}
console.log(sum5(1, 2, 3, 4, 5));

//========================================

// 6. Spread Operator
const numbers = [1, 2, 3, 4, 5];
console.log(sum(...numbers));

//========================================
// Exercise
function areBothEven(n1, n2) {
    return !(n1 % 2) && !(n2 % 2);
}

console.log(`are both even 1 and 3? `, areBothEven(1, 3));
//================================================

console.log("================================================");

//hidden "arguments" variable

function getDevObject(name) {
    const skills = []
    for (let i = 1; i < arguments.length; i++) {
        skills.push(arguments[i]);
    }
    return {
        devName: name,
        devSkills: skills
    };
}

let maria = getDevObject('Maria', 'JavaScript', 'React', 'Node.js');
console.log(maria);


function getDevObject1(name, age, ...skills) {
    return {
        devName: name,
        devAge: age,
        devSkills: skills
    };
}
console.log("==================Max==============================");
const max = getDevObject1('Max', 23, 'JavaScript', 'React', 'Node.js');
console.log(max);

console.log("==================Alex==============================");
const alex = getDevObject1('Alex', 25);
console.log(alex);


console.log("================================================");

// DEFAULT PARAMETERS
function setColor(bicycle, color) {
    bicycle.color = color || "Red";
}
const myBicycle = {};
setColor(myBicycle);
console.log(`with default value ${myBicycle.color}`);
setColor(myBicycle, 'blue');
console.log(`without default value ${myBicycle.color}`);

console.log("================================================");

// pase a function as a parameter
function myForEach(array, func) {
    for (let i = 0; i < array.length; i++) {
        func(array[i], i, array);
    }
}

const colors = ['red', 'green', 'blue'];

myForEach(colors, (element) => {
    console.log(element.toUpperCase());
}
);

console.log("================================================");

// return a function from a function
function createGreeter(greeting) {
    greeting = greeting + ' Hello from inside the function ';
    return function (name) {
        console.log(greeting + ' ' + name + '!');
    }
}

const sayHello5 = createGreeter('Hello123');

sayHello5('World88');

console.log("================================================");

// IIFE - Immediately Invoked Function Expression
// it is a function that is executed right after it is created
// it is used to avoid polluting the global scope
// it is used to create a private scope
// it is used to create a closure
// it is used to create a module


(function () {
    console.log('IIFE');
})();

(function () {
    console.log('IIFE 2');
})()



console.log("=======================Hoisting=========================");
// Hoisting
function hoist() {
    console.log(x)
    var x = 5;
    console.log(x)
}

hoist();
console.log("================================================");

function hoist1() {
    let x;
    console.log(x);  // outputs undefined, not a ReferenceError
    x = 25;
    console.log(x);  // outputs 25
}
hoist1();

console.log("================================================");

console.log("======================Hoisting Functions==========================");
// Hoisting Functions
// example 1
// const respose = sendRequest(data, {
//     someValue: ...,
//     otherConfigOption: ...,
// }, {
//     moreData: ...
// });



