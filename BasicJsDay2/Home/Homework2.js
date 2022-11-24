function reverseString(strings) {
    var charsArray = strings.split("");
    var revCharsArray = charsArray.reverse();
    var newString = revCharsArray.join("");
    console.log(newString);
}

reverseString("lmao");