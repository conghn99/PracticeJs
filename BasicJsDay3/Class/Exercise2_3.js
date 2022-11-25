function arrToString(arr) {
    // var strings = '';
    // for (let i = 0; i < arr.length; i++) {
    //     if (i === arr.length - 1) {
    //         strings += `${arr[i]}`;
    //     } else if (i === arr.length - 2) {
    //         strings += `${arr[i]} và `;
    //     } else {
    //         strings += `${arr[i]}, `;
    //     }
    // }
    // console.log(strings);

    if (arr.length === 1) {
        console.log(arr[0]);
    } else {
        finalElement = arr.pop();
        var strings = arr.join(", ");
        console.log(`${strings} và ${finalElement}`);
    }
}

arrToString(["Đạt", "Hiếu"]);

function arrToDate(arr) {
    if ((arr[0] < 0 || arr[0] > 23) ||
        (arr[1] < 0 || arr[1] > 59) ||
        (arr[2] < 1 || arr[2] > 31) ||
        (arr[3] < 1 || arr[3] > 12) ||
        arr[4] <= 0) {
        console.log(undefined);
    } else {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < 10) {
                arr[i] = `0${arr[i]}`;
            }
        }
        if (arr[0] < 12) {
            console.log(`${arr[0]}:${arr[1]} ${arr[2]}/${arr[3]}/${arr[4]} AM`);
        } else {
            arr[0] = `0${arr[0]}`
        }
    }
}