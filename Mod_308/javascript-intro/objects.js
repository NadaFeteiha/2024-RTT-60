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


