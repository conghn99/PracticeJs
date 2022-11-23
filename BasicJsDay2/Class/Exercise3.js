function checkDay(day) {
    var dayzz;
    switch (day) {
        case 0:
            dayzz = "Chủ nhật";
            break;
        case 1:
            dayzz = "Thứ hai";
            break;
        case 2:
            dayzz = "Thứ ba";
            break;
        case 3:
            dayzz = "Thứ tư";
            break;
        case 4:
            dayzz = "Thứ năm";
            break;
        case 5:
            dayzz = "Thứ sáu";
            break;
        case 6:
            dayzz = "Thứ bảy";
            break;
        default:
            dayzz = "Ko phải ngày trong tuần";
    }
    if (day > 0 && day < 6) {
        console.log(`${dayzz} - Ngày trong tuần`)
    } else if (day == 0 || day == 6) {
        console.log(`${dayzz} - Ngày cuối tuần`)
    } else {
        console.log("Ko phải ngày trong tuần")
    }
}

checkDay(8);