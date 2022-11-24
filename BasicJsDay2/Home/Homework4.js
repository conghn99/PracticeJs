function subString(string) {
    if (string.length < 15) {
        console.log("Độ dài của chuỗi phải lớn hơn 15");
    } else {
        var subStr = string.substring(0, 10);
        console.log(`${subStr}...`);
    }
}

subString("ádasdkajasssssdsadsadad");