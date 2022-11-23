function getValue(foo, bar) {
    console.log(`foo has value ${foo}`);
    console.log(`bar has value ${bar}`);
    console.log("swapping ...")
    let temp = foo;
    foo = bar;
    bar = temp;
    console.log(`foo has value ${foo}`);
    console.log(`bar has value ${bar}`);
}

getValue(2, 5)