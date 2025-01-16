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
