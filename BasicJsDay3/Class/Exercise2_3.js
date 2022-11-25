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

    finalElement = arr.pop();
    var strings = arr.join(", ");
    console.log(`${strings} và ${finalElement}`);
}

arrToString(["Đạt", "Hiếu", "Đoàn", "Vượng"]);