
// promises 
/*
function greeting() {
    // [1] Some code here
    sayHi();
    // [2] Some code here
}
function sayHi() {
    return "Hi!";
}

// alert("Sync");

// Invoke the `greeting` function
// greeting();

// [3] Some code here

//   console.log("first");

//   setTimeout(() => {
//       console.log("second");
//   }, 1000);

//   console.log("third");

// ============= Promises =============

// Creating a promise

// const myPromise = new Promise((resolve, reject) => {
//     let value = true;

//     if (value) {
//         resolve("DATA IS BACK!")
//     } else {
//         reject("REJECT ERROR!");
//     }
// });

// myPromise
//     .then(result => {
//         console.log(result);
//         return "SOME VALUE"
//     })
//     .then(value => console.log(value))
//     .catch(error => console.error(error)) // reject
//     .finally( () => console.log("ANYWAYS")); // completed

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = false;
        if (success) {
            resolve("Guess this worked!");
        } else {
            reject("ERROR!");
        }
    }, 1000);
});

console.log(typeof myPromise);

myPromise
    .then((x) => x + " Again?")
    .then((x) => x + " Third time!")
    .then((x) => x + " Promises are cool.")
    .then((result) => console.log(result))
    .catch((err) => {
        console.error(err);
    });

fetch("https://jsonplaceholder.typicode.com/todos") // step1
    .then((response) => response.json()) // step 2
    .then((json) => console.log(json)); // step 3

*/

// ========================

console.log("===================== last part ====================")
new Promise((resolve, reject) => {
    console.log("Initial");

    resolve();
})
    .then(() => {
        throw new Error("Something failed");
    })
    .catch((e) => {
        console.error(`Do that => ${e.message}`);
    })
    .then(() => {
        console.log("****Do this, no matter what happened before***");
        throw new Error("Error######");

    })
    .catch((e) => console.error(`Also catch errors => ${e.message}`));


// Composition Tools - Promise.all

// promise.all takes an array of promises and returns a single promise that resolves 
// when all of the promises in the iterable argument have resolved 
// or when the iterable argument contains no promises.
// It rejects with the reason of the first promise that rejects.




// Promise.allSettled() is a Promise method that resolves when all of the 
// given promises have either resolved or rejected, with an array of objects
// that each describes the outcome of each promise.



