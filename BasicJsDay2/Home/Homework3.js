function countryCode(code) {
    switch (code) {
        case "VN" :
            console.log("Xin chào");
            break;
        case "EN" :
            console.log("Hello");
            break;
        case "JP" :
            console.log("Konichiwa");
            break;
        case "CN" :
            console.log("Nihao");
            break;
        case "CN" :
            console.log("Annyeonghaseyo");
            break;
        default :
            console.log("Ko có mã quốc gia này");
    }
}

countryCode("CN");