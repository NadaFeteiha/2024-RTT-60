// Date Object Lab:

//Part 1: Introduction to the Date Object
// TODO: Task 1: Create a Date Object
// Create a Date object for the current date and log it.
let currentDate = new Date();
console.log(currentDate);

console.log("=====================================");

// Part 2: Extracting Date and Time Information
// TODO: Task 2: Extract Date Components
let dayOfWeek = currentDate.getDay();
let dayOfMonth = currentDate.getDate();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();

let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

console.log(`today is ${dayOfMonth}/${month}/${year}`);

console.log(`time is ${hours}:${minutes}:${seconds}`);

console.log("=====================================");

// Part 3: Creating Specific Dates
//TODO: Task 3: Create and Log Specific Dates
// month is 0 based so 7 represents August
let myBirthday = new Date(1991, 7, 5);
console.log(`my birthday is ${myBirthday}`);

console.log("=====================================");

// Part 4: Formatting Dates
//TODO: Task 4: Format and Display Dates

let today = new Date();
let dateStr = today.toDateString();
let localeDate = today.toLocaleDateString();
let isoDate = today.toISOString();

console.log(`date string: ${dateStr} \nlocale date string: ${localeDate} \niso date string: ${isoDate}`);
console.log("=====================================");

// Part 5: Manipulating Dates
//TODO: Task 5: Manipulate Dates
// Create a Date object for today.
// Change the year to 2030, the month to December, and the day to 25.

let manipulateDate = new Date();
console.log(`current date is ${manipulateDate.toLocaleDateString()}`);
manipulateDate.setFullYear(2030);
manipulateDate.setMonth(11);
manipulateDate.setDate(25);
console.log(`future date is ${manipulateDate.toLocaleDateString()}`);

console.log("=====================================");

// Part 6: Comparing Dates
// TODO: Task 6: Compare Two Dates
// Create two Date objects.
// Write a condition to compare them and display which one is earlier or later.

function compareDates(date1, date2) {
    if (date1 < date2) {
        console.log(`${date1.toDateString()} is earlier than ${date2.toDateString()}`);
    } else if (date1 > date2) {
        console.log(`${date1.toDateString()} is later than ${date2.toDateString()}`);
    } else {
        console.log(`${date1.toDateString()} is equal to ${date2.toDateString()}`);
    }
}

let date1 = new Date(2025, 7, 5);
let date2 = new Date(2025, 7, 6);

compareDates(date1, date2)
console.log("=====================================");

// change date1 to be equal date2
date1.setDate(6);
compareDates(date1, date2)
console.log("=====================================");

// change date1 to be later than date2
date1.setMilliseconds(10);
compareDates(date1, date2)
console.log("=====================================");


