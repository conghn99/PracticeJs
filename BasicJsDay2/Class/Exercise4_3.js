function changeToNumber(string) {
    var number = Number.parseFloat(string);
    if (isNaN(number)) {
        console.log("0px");
    } else {
        console.log(`${number}px`);
    }
}

changeToNumber("lmao");