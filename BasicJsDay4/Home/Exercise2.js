function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
}

const personPrototype = {
    eat(foods) {
        // foods is string
        // if (this.stomach.length > 10) {
        //     console.log("Too much food!");
        // } else {
        //     this.stomach.push(foods);
        // }

        // foods is array
        if (foods.length > 10) {
            console.log("Too much food!");
        } else {
            this.stomach = this.stomach.concat(foods);
        }
    },
    poop() {
        this.stomach = [];
    },
    introduceMyself() {
        console.log(`This is ${this.name}, ${this.age} years old`);
    }
}

Person.prototype = personPrototype;

var person = new Person("Kong", 23);
console.log(person.stomach);
person.eat(["rice", "meet", "cabbage"]);
console.log(person.stomach);
person.poop();
console.log(person.stomach);
person.introduceMyself();