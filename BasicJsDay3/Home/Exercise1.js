function firstCharaToUpperCase(strings) {
    var arr = strings.split(' ');
    var newarr = [];
    for(var i = 0; i < arr.length; i++){
        newarr.push(`${arr[i].charAt(0).toUpperCase()}${arr[i].slice(1)}`);
    }
    console.log(newarr.join(' '));
}

firstCharaToUpperCase("hom qua em den truong");