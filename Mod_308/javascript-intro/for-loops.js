//For loops
console.log("loops")

// Exercise

// Count down from 10 to 1.
console.log("Count down: ")
for (let i = 10; i > 0; i--) {
    console.log("Count down: ",result)
}

// Output odd numbers from 1 to 10.
// Output even number from 1 to 10.
console.log("Odd and Even numbers: ")
for (let i = 1; i<=10; i++) {
    if (i % 2 !== 0) {
        console.log(`${i} is odd number..`)
    }else{
        console.log(`${i} is even number..`)
    }
}

// Output multiples of 3, starting at 6 and ending at 60.
for (let i = 6; i <= 60; i++) {
    if (i % 3 === 0) {
        console.log(`${i} is a multiple of 3`)
    }
}

// Output an increasing number of # symbols, from 1 to 7, as shown below.
let result = ""
for (let i = 1; i <= 7; i++) {
    result += "#"
    console.log(result)
}

// Another way
for (let i = 1; i <= 7; i++) {
    console.log("#".repeat(i))
}


// Now, write a for loop that iterates from 1 to 20. The loop should:
// Print “prime” for all prime numbers.
// Print “even” for all even numbers.
// Print “odd” for all odd numbers.
// Treat 2 as an even number and 1 & 3 as odd, rather than prime.
for (let i = 1; i <= 20; i++) {
    if (i!==2 && i!==3 && isPrime(i)) {
        console.log(`${i} is prime`);
    } else if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
