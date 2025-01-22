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
const sayHello = function (name) {
    console.log('Hello ' + name + '!');
}
sayHello('World');

//========================================

// 3.Arrow Function
const sayHello = (name) => {
    console.log('Hello ' + name + '!');
}
sayHello('World');

//========================================

// 4. Default Parameters
function sayHello(name = 'World') {
    console.log('Hello ' + name + '!');
}
sayHello();

//========================================

// 5. Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}
console.log(sum(1, 2, 3, 4, 5));

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


