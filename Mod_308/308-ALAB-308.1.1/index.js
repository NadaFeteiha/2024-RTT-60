// Part 1: Math Problems
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;


// print 
console.log("numbers: ", n1, n2, n3, n4);

// Check if all numbers are divisible by 5. 
// Cache the result in a variable.
const isDivisibleBy5 = n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 == 0 && n4 % 5 == 0;
console.log("is divisible by 5",isDivisibleBy5);


// Check if the first number is larger than the last. Cache the result in a variable.
const isFirstLarger = n1 > n4;
console.log(`is first ${n1} larger than last ${n4}`, isFirstLarger);

// Accomplish the following arithmetic chain:
// 1] Subtract the first number from the second number.
const sub1 = n2 - n1;
console.log(`Subtract the first number ${n1} from the second number ${n2}`, sub1);

// 2] Multiply the result by the third number.
const mul1 = sub1 * n3;
console.log(`Multiply the result ${sub1} by the third number ${n3}`, mul1);

// 3] Find the remainder of dividing the result by the fourth number.
const rem1 = mul1 % n4;
console.log(`Find the remainder of dividing the result ${mul1} by the fourth number ${n4}`, rem1);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. 
// Rename the variable as appropriate.
const isAllOver25 = n1 > 25 && n2 > 25 && n3 > 25 && n4 > 25;
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(`is All over than 25`, isAllOver25);

// ====================================================================================================
console.log("======================================================================= \nPart 2: Practical Math");
// Part 2: Practical Math
// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
const totalDistance = 1500;

// You have a fuel budget of $175.
const fuelBudget = 175;

// The average cost of fuel is $3 per gallon.
const fuelCost = 3;

// Your car’s fuel efficiency is as follows:
//**************** SPEED 55 **********************//
console.log("********* speed 55 ************")
// At 55 miles per hour, you get 30 miles per gallon.
// How many gallons of fuel will you need for the entire trip?
const gallonsRequired = totalDistance / 30;
console.log("gallons required for speed 55 is ", gallonsRequired);

// Will your budget be enough to cover the fuel expense?
const budgetWillNeed = gallonsRequired * fuelCost;
const isBudgetEnough = fuelBudget >= budgetWillNeed;
console.log(`is budget enough? budget we need ${budgetWillNeed} budget we hava ${fuelBudget}`, isBudgetEnough);

// How long will the trip take, in hours?
const hoursRequired = totalDistance / 55;
console.log("hours required for speed 55", hoursRequired);

//**************** SPEED 60 **********************//
console.log("********* speed 60 ************")
// At 60 miles per hour, you get 28 miles per gallon.
// How many gallons of fuel will you need for the entire trip?
const gallonsRequired60 = totalDistance / 28;
console.log("gallons required for speed 60 is ", gallonsRequired);

// Will your budget be enough to cover the fuel expense?
const budgetWillNeed60 = gallonsRequired60 * fuelCost;
const isBudgetEnough60 = fuelBudget >= budgetWillNeed60;
console.log(`is budget enough? budget we need ${budgetWillNeed60} budget we hava ${fuelBudget}`, isBudgetEnough60);

// How long will the trip take, in hours?
const hoursRequired60 = totalDistance / 60;
console.log("hours required for speed 60", hoursRequired60);

//************** SPEED 75 ******************** */
console.log("********* speed 75 ************")
// At 75 miles per hour, you get 23 miles per gallon.
// How many gallons of fuel will you need for the entire trip?
const gallonsRequired75 = totalDistance / 23;
console.log("gallons required for speed 75 is ", gallonsRequired75);

// Will your budget be enough to cover the fuel expense?
const budgetWillNeed75 = gallonsRequired75 * fuelCost;
const isBudgetEnough75 = fuelBudget >= budgetWillNeed75;
console.log(`is budget enough? budget we need ${budgetWillNeed75} budget we hava ${fuelBudget}`, isBudgetEnough75);

// How long will the trip take, in hours?
const hoursRequired75 = totalDistance / 75;
console.log("hours required for speed 75", hoursRequired75);


// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. 
// Which makes the most sense for the trip?
if(isBudgetEnough75){
    console.log("budget makes sense for speed 75");
}else if(isBudgetEnough60){
    console.log("budget makes sense for speed 60");
}else if(isBudgetEnough){
    console.log("budget makes sense for speed 55");
}


// ====================================================================================================
// Part 3: Future Exploration
console.log("======================================================================= \nPart 3: Future Exploration");
