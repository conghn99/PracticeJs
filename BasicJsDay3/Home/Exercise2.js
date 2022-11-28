function arrToDate(arr) {
    if ((arr[0] < 0 || arr[0] > 23) ||
        (arr[1] < 0 || arr[1] > 59) ||
        (arr[2] < 1 || arr[2] > 31) ||
        (arr[3] < 1 || arr[3] > 12) ||
        arr[4] <= 0) {
        console.log(undefined);
    } else {
        if (arr[0] < 12) {
            putZeroBefore(arr);
            console.log(`${arr[0]}:${arr[1]} ${arr[2]}/${arr[3]}/${arr[4]} AM`);
        } else {
            arr[0] -= 12;
            putZeroBefore(arr);
            console.log(`${arr[0]}:${arr[1]} ${arr[2]}/${arr[3]}/${arr[4]} PM`);
        }
    }
}

var putZeroBefore = function(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < 10) {
            arr[i] = `0${arr[i]}`;
        }
    }
}

arrToDate([17, 1, 3, 1, 1999]);