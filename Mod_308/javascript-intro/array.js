// Array

// array is a collection of elements
// array is a data structure that stores a collection of elements
// lets create an array of persons

let persons = ['John', 'Doe', 'Jane', 'Doe', 'James', 'Doe'];
console.log(persons);

// greeting all persons
for (let i = 0; i < persons.length; i++) {
    console.log('Hello ' + persons[i]);
}

console.log('-----------------------');
// loop by another way
for (let person of persons) {
    console.log('Hello ' + person);
}


console.log('-----------------------');
//Exercise 
const movies = [ 'The Lord of the Rings', 'don\'t look up', 'The pronomila Activity', 'The ring', 'The conjuring', 'The Nun', 'The Exorcist', 'The Grudge', 'The Shining', 'The Sixth Sense', 'The Others', 'The Orphanage', 'The Babadook', 'The Witch', 'The Lighthouse',];
let playMovie = movies[Math.floor(Math.random() * movies.length)];
console.log('Playing movie: ' + playMovie);
console.log("====================================")


// Array Methods
//concat() - Joining Arrays Together

const myFriendMovies = ['The Lord of the Rings', 'The Shining', 'The Conjuring', 'The Nun', 'The Exorcist'];
const allMovies = movies.concat(myFriendMovies);
console.log("All movies: \n",allMovies);
console.log("====================================")

//Join - Turning Arrays into StringsTurning Arrays into Strings
let allMoviesString = allMovies.join(', ');
console.log("All movies with join:\n",allMoviesString);
console.log("====================================")

//push() and unshift() - Adding Elements to an Array
let extendMovies = allMovies.push('The Grudge');
console.log("All movies with push:\n",allMovies);
console.log("====================================")

//add to the front of an array with unshift
let addMovies = allMovies.unshift('The Babadook');
console.log("All movies with unshift:\n",allMovies);

//unshift & shift
// unshift() - add an element to the beginning of an array
// shift() - remove an element from the beginning of an array

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits);
fruits.unshift('Strawberry');
console.log(fruits);
fruits.shift();
console.log(fruits);
console.log("====================================")

// slice() - Extracting Elements from an Array
let favMovies = allMovies.slice(0, 5);
console.log("Favorite movies:\n",favMovies);
console.log("====================================")



// 2D Arrays

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);
console.log("====================================")
// log diagonal elements
console.log("diagonal elements"); 
console.log(matrix[0][0], matrix[1][1], matrix[2][2]);
console.log("====================================")


// flatten 2D array
let flatMatrix = matrix.flat();
console.log(flatMatrix);
console.log("====================================")


// sort() - Sorting an Array
console.log('Sort array');
let num = [4, 2, 5, 1, 3, -14 , 0];
console.log("sort ascending: ",num.sort((a, b) => a - b));
console.log("sort descending: ",num.sort((a, b) => b - a));
console.log("====================================")

// for each in one line
console.log('Movies');
movies.forEach(movie => console.log(movie));
console.log("====================================")

// for each with index
console.log('Movies with index');
movies.forEach((movie, index) => console.log(index + 1, movie));
console.log("====================================")

// copy array with spread operator
console.log('copy array with spread operator');

let copyMovies = ["new array movies",...movies];
console.log(copyMovies);
console.log("====================================")
