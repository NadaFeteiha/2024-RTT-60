console.log("hello world external js file");

// let companyName = "CompnyNameXYZ";
// companyName = "PerScholas";
// console.log(companyName);



// let name = prompt("Please provide your name")
// console.log(name);

// let lastName = prompt("Last name")
// console.log(lastName);



let x = 10; 
console.log("Global: ", x);

{
    x = 2;
    console.log("Block: ", x);
    let y = 100;
    x++;
}
// result = y;
// console.log("Y= ",y);

console.log("Bottom: ", x);




var counter = 1;
function processData() {
    var counter = 1;
    counter =  10
    console.log("Counter: ", counter);
}

processData()
console.log("Counter1: ", counter);
counter++;
console.log("Counter2: ", counter);


// ================ Data Types ================

let myVar = "Hello World!"

console.log(typeof 42);
console.log(typeof myVar);


// ================ Operators ================

let num1 = 10;
let num2 = 20;
let result = num1 + num2;
console.log(result);

result = num1 - num2;
console.log("result = "+result);

// ================ Conditional Statements ================


// if (condition) 

let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote");
}

let num = 10;
if (num % 2 == 0) {
    console.log("Even number");
}


// ================== Test ==================

let fullName = prompt("Full name")
console.log(fullName);

let age1 = prompt("age")
console.log(age1);

let address = prompt("address")
console.log(address);
