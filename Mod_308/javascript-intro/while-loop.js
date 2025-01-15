// while loop

//Exercise
// Count down to 0 from a given number.
let i = 30;
while (i>=0) {
    console.log(`i is ${i}`);
    i--;
}

// Log integers in multiples of 3 as long as they are less than 35.
console.log('--------integers in multiples of 3---------');
let x = 0;
while (x < 35) {
    x += 3;
    console.log(`x is ${x}`);
}

console.log('--------another way---------');
x=0
while (x < 35) {
    if (x%3 == 0) {
        console.log(`x is ${x}`);
    }
    x++;
}


// Print integers in multiples of 5 as long as they are less than 100.
x =0;
while (x < 100) {
    x += 5;
    console.log(`x is ${x}`);
}

console.log('--------integers between 0 and 20---------');
// Print integers between 0 and 20 with the following conditions:
// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.
x=0;
while (x < 20) {
    if (x%2 == 0) {
        console.log(`x is ${x*3}`);
    }
    x++;
}

console.log('--------Another way for integers between 0 and 20---------');
x=0;
while (x < 20) {
    console.log(`x is ${x*3}`);
    x += 2;
}

// Print all prime numbers between 0 and 20.
console.log('--------prime numbers between 0 and 20---------');
x=2;
while (x < 20) {
    let isPrime = true;
    for (let i=2; i<x; i++) {
        if (x%i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`x is ${x}`);
    }
    x++;
}


// Romeo went to the vending machine to buy himself a cookie, 
// which costs $4. He paid with a $10 bill,
//  and the vending machine gave him his change in quarters.
// Write a loop that outputs how many quarters Romeo received.
let change = 10 - 4;
let counter = 0;
while (change > 0) {
    change -= 0.25;
    counter++;
}
console.log(`Romeo received ${counter} quarters`);
