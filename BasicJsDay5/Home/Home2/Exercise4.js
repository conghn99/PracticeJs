// Bài 1
var ulList = document.querySelectorAll("ul");
for (var i = 0; i < ulList.length; i++) {
    ulList[i].firstElementChild.textContent = "first";
    ulList[i].lastElementChild.textContent = "last";
}

// Bài 2
function noteWordLength(length) {
    var strings = document.querySelector("p").innerHTML;
    let arr = strings.split(" ");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].endsWith(",") || arr[i].endsWith(".")) {
            if (arr[i].length - 1 >= length) {
                arr[i] = `<b>${arr[i]}</b>`;
            }
        } else {
            if (arr[i].length >= length) {
                arr[i] = `<b>${arr[i]}</b>`;
            }
        }
    }
    document.querySelector("p").innerHTML = arr.join(" ")
}

noteWordLength(7)

// Bài 3
function changeToWord() {
    let str = document.querySelector("span").textContent;
    let res = str.replace(/\?/g, "why?").replace(/!/g, "what?");
    document.querySelector("span").textContent = res;
}

changeToWord()