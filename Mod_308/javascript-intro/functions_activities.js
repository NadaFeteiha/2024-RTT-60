console.log("================================================");
console.log("Practice Activity 1");
// Practice Activity 1: Write a Function Declaration
// Write a function named computeArea using the function declaration approach.
function computeArea(width, height) {
    return width * height;
}

let width = 5;
let height = 10;
console.log(`The area of a rectangle with a width of ${width} and a height of ${height} is ${computeArea(width, height)} square units.`);
//================================================




console.log("================================================");
console.log("Practice Activity 2");
// Practice Activity 2: Write a Function Expression
// Write a function named planetHasWater using the function expression syntax.


const planetHasWater = function (planet) {
    if (typeof planet !== 'string') {
        return 'Invalid input.';
    } else { 
        planet = planet.trim().toUpperCase();
        return planet === 'EARTH' || planet === 'MARS';
    }
}

console.log(`Does Earth have water? ${planetHasWater('Earth')}`);
console.log(`Does EArth have water? ${planetHasWater('EArth')}`);
console.log(`Does Venus have water? ${planetHasWater('Venus')}`);
console.log(`Does Mars with spaces have water? ${planetHasWater('Mars   ')}`);
console.log(`Does MARS have water? ${planetHasWater('  MARS')}`);

console.log(`Does 1 have water? ${planetHasWater(1)}`);

