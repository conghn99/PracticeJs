function chunkArray(arr, int) {
    var newArr = [];
    for (let i = 0; i < arr.length; i += int) {
        newArr.push(arr.slice(i, i + int));
    }
    console.log(newArr);
}

chunkArray([1, 2, 3, 4, 5, 6, 7], 3);