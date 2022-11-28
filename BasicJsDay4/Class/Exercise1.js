// Bai 1
const animal = {
    type : "cat",
    name : "Tom",
    breed : "Male",
    hairColor : "Blue",
    favoriteFood : ["Fish", "mice", "bird"]
}

// Bai 2
console.log(animal.name);

// Bai 3
animal.yearOld = 90;
console.log(animal);

// Bai 4
function descripAnimal(obj) {
    console.log(`We have a ${obj.type} name ${obj.name}, it likes to eat ${obj.favoriteFood.join(', ')}.`)
}

descripAnimal(animal);

// Bai 5
var animals = [
    animal,
    {
        type : "mouse",
        name : "Jerry",
        breed : "Male",
        hairColor : "Brown",
        favoriteFood : ["Cheese", "Cake", "peanut"],
        yearOld : 89
    },
    {
        type : "dog",
        name : "Pluto",
        breed : "Male",
        hairColor : "Gray",
        favoriteFood : ["Meet", "bone", "butter"],
        yearOld : 91
    }
]