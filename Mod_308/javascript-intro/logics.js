let thisLogic = 3 > 2 || 6 == 7; 

console.log(thisLogic); // true

userName = "John";
console.log(userName); 
console.log("length = "+ userName.length); 

// concat
let firstName = "Nada";
let lastName = "Feteiha";
let fullName = firstName + " " + lastName;
console.log("concat ",fullName); 

// toUpperCase
let upperCase = fullName.toUpperCase();
console.log("upperCase", upperCase);

// toLowerCase
let lowerCase = fullName.toLowerCase();
console.log("toLowerCase", lowerCase);

// slice
let slice = fullName.slice(0, 4);
console.log("slice",slice);

// substring
let substring = fullName.substring(0, 4);
console.log("substring",substring);

// replace
let replace = fullName.replace("Nada", "Nour");
console.log("replace",replace);

// split
let split = fullName.split(" ");
console.log("split",split);

// charAt
let charAt = fullName.charAt(0);
console.log("charAt",charAt);

// charCodeAt
let charCodeAt = fullName.charCodeAt(0);
console.log("charCodeAt",charCodeAt);

// indexOf
let indexOf = fullName.indexOf("F");
console.log("indexOf",indexOf);

// lastIndexOf
let lastIndexOf = fullName.lastIndexOf("a");
console.log("lastIndexOf",lastIndexOf);

// includes
let includes = fullName.includes("Nada");
console.log("includes",includes);

// startsWith
let startsWith = fullName.startsWith("Nada");
console.log("startsWith",startsWith);

// endsWith
let endsWith = fullName.endsWith("Feteiha");
console.log("endsWith",endsWith);

// repeat
let repeat = fullName.repeat(2);
console.log("repeat",repeat);

// trim
let trim = "    Nada Feteiha    ";
console.log("trim",trim.trim());

// padStart
let padStart = fullName.padStart(20, "a");
console.log("padStart",padStart);

// padEnd
let padEnd = fullName.padEnd(20, "a");
console.log("padEnd",padEnd);



