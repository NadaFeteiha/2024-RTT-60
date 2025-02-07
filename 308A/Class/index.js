// Class Definition
class Animal {

    //properties
    //eyes, legs, isAwake, isMoving
    eyes;
    legs = [];
    isAwake;
    isMoving;

    constructor(eyes, legs, isAwake, isMoving) {
        this.eyes = eyes
        this.eyes = eyes;
        this.legs = legs;
        this.isAwake = isAwake;
        this.isMoving = isMoving;
    }
    sleep() {
        this.isAwake = false;
    }
    wake() {
        this.isAwake = true;
    }
    sit() {
        this.isMoving = false;
    }
    walk() {
        this.isMoving = true;
    }
    speak(sound) {
        console.log(sound);
    }

    toString() {
        return `This Animal has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
    }
}


class Human extends Animal {
    constructor(isAwake, isMoving, hair, first, last, age, occupation, city, state, zip) {
        super(2, 2, isAwake, isMoving);
        this.hair = hair;
        this.name = {
            first,
            last
        };
        this.age = age;
        this.occupation = occupation;
        this.location = {
            city,
            state,
            zip
        }
    }

    introduce() {
        console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
    }
}

console.log("==============DEVELOPER=======================");

class Developer extends Human {

    constructor(isAwake, isMoving, hair, first, last, age, city, state, zip, languages, experience) {
        super(isAwake, isMoving, hair, first, last, age, "Developer", city, state, zip);
        this.languages = languages;
        this.experience = experience;
    }

    code() {
        console.log(`I know ${this.languages}`)
    }

    introduce() {
        console.log(`Hello ${this.name.first} develop with ${this.languages} and have ${this.experience} years of experience`);
    }

}


const dev1 = new Developer(true, true, "Black", "Nada", "Feteiha", 33, "Bothell", "WA", 100, ["JavaScript", "Html", "Java"], 2);

console.log(dev1);

dev1.introduce()

dev1.code()
