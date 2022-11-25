function doubleArrayValue(arr) {
    console.log(arr.map(x => x*2));
}

doubleArrayValue([1, 2, 3, 4]);

function evenArrNumber(arr) {
    var arr2 = [];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr2.push(arr[i]);
        }
    }
    console.log(arr2);
}

evenArrNumber([1, 2, 3, 4]);

function returnArr(number) {
    var arr = [];
    for (let i = 0; i <= number; i++) {
        arr.push(i);
    }
    console.log(arr);
}

returnArr(5);

function returnReverseArr(number) {
    var arr = [];
    for (let i = number; i >= 0; i--) {
        arr.push(i);
    }
    console.log(arr);
}

returnReverseArr(5);

function checkNumberTotal(arr) {
    var total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    console.log(total);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === total/2) {
            return arr[i];
        }
    }
    return null;
}

checkNumberTotal([1, 2, 3, 4, 10]);