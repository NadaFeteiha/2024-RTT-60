//Global Scop

let userName;

let lastName= "Feteiha";
let firstName= "Nada"

{
    //local scope
    let fullName= `${firstName} ${lastName}`;
    console.log(fullName);
}



let x = 10;

{
	let y = 5;
	{
		let z = x + y;
        console.log(z);
        z++;
        console.log(z);
	}
}

// var act as a global variable
let a = 10;
{
	let b = 5;
	{
		var c = a + b;
    }
    console.log(c);
}

//Control Flow and Conditionals

let k = Math.floor(Math.random() * (20 - (-20))) -20;
console.log(`k= ${k}`);

if (k > 0){
	console.log('Positive!');
}
else{
    console.log('Negative.');
}

let age = 12;

if (age >= 18){
    console.log('Access!');
}else{
    console.log('Access denied.');
}


console.log("=========================Exercise==============================")

// Exercise #1
// Write a nested if...else statement.
// Declare a variable called num.
// Add an if...else statement that checks 
// if num is positive & greater than 100.
// Add another statement that checks 
// if num is positive but less than 100.
// Add a final statement to check if num is negative.
let num =50;
if (num > 100){
    console.log('Positive and greater than 100');
}else if(num > 0){
    console.log('Positive but less than 100');
}else{
    console.log('Negative');
}


// Exercise #2
// Write an if..else statement for the following requirements:
// If a learner gets 90 or higher: console.log("A")
// If a learner get 80 or above: console.log("B")
// If a learner get 70 or above: console.log("C")
// If a learner get 55 or above: console.log("D")
// Any grade lower than 55: console.log("F")

let learnerGrade = 85;

// if (learnerGrade >= 90 && learnerGrade <= 100){
//     console.log('A');
// }else if(learnerGrade >= 80){
//     console.log('B');
// }else if(learnerGrade >= 70){
//     console.log('C');
// }else if(learnerGrade >= 55){
//     console.log('D');
// }else if(learnerGrade >=0){
//     console.log('F');
// }else{
//     console.log('Invalid grade');
// }


// switch statement
switch(true){
    case learnerGrade >= 90:
        console.log('A');
        break;
    case learnerGrade >= 80:
        console.log('B');
        break;
    case learnerGrade >= 70:
        console.log('C');
        break;
    case learnerGrade >= 55:
        console.log('D');
        break;
    default:
        console.log('F');
}

