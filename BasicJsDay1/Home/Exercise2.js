function checkFooBar(number) {
    if (typeof number !== 'number') {
        console.log("Not a Number!")
    } else if (number % 3 == 0 && number % 5 != 0) {
        console.log("Foo");
    } else if (number % 5 == 0 && number % 3 != 0) {
        console.log("Bar");
    } else if (number % 3 == 0 && number % 5 == 0) {
        console.log("FooBar")
    } else {
        console.log("Not FooBar")
    }
}

checkFooBar("abc")