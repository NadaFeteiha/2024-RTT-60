// objects

const myCar = {
    brand: 'BMW',
    year: 2022,
    hp: 250,
    color: 'red',
};

console.log(`my car is a ${myCar.brand} ${myCar.color} with ${myCar.hp} hp`);

// add new property
myCar.price = 50000;
console.log(myCar);

// delete property
delete myCar.price;
console.log(myCar);

// check if property exists
console.log('price' in myCar);
console.log('color' in myCar);

// Object.keys() - returns an array of a given object's own enumerable property names
console.log("object keys");
console.log(Object.keys(myCar));

// Object.values() - returns an array of a given object's own enumerable property values
console.log("object values");
console.log(Object.values(myCar));

myCar.owner = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St'
}

console.log(myCar);

// add engine property to car
console.log("Add engine property to car");
myCar.engine = {
    type: 'V8',
    hp: 250,
    cylinders: 6,
    size: 3.2
}
console.log(myCar.engine.size);


// loop through object
console.log("Loop through object");
for (let key in myCar) {
    if (myCar[key]=== 250){
        console.log(`my car has ${myCar[key]} ${key}`);
        break;
    }else{
        console.log(`my car has ${myCar[key]} ${key}s`);
    }
}

const values = Object.values(myCar);
values.forEach(value => console.log(value));
console.log("====================================")

// Object.entries() - returns an array of a given 
// object's own enumerable string-keyed property [key, value] pairs
console.log("Object entries");
console.log(Object.entries(myCar));
console.log("====================================")

// destructuring object
console.log("Destructuring object");
const { brand, year, hp, color } = myCar;
console.log(brand, year, hp, color);    
console.log("====================================")


// map object
// map object to a new object means converting an object to a map object
console.log("Map object");
const map = new Map(Object.entries(myCar));
console.log(map);
console.log("====================================")

// set object
// set object to a new object means converting an object to a set object
console.log("Set object");
const set = new Set(Object.entries(myCar));
console.log(set);