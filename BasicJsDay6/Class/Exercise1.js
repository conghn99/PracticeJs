const a = document.querySelector('.buttons-group');
a.addEventListener("click", (events) => {
    const clickTarget = events.target;
    if (clickTarget.classList.contains("buttons-group")) {
        return;
    }
    console.log(clickTarget.textContent);
})

// Bai 1
const but = document.querySelector('.buttons');
let nums = document.querySelector('.number').textContent;
var count = 0;
but.addEventListener("click", (events) => {
    const tar = events.target;
    if (tar.classList.contains('btn1')) {
        document.querySelector('.number').textContent = ++count;
    } else if (tar.classList.contains('btn2')) {
        document.querySelector('.number').textContent = --count;
    } else return;
})

// Bai 2
const light = document.querySelector('.lamp-button');
let initState = false;
light.addEventListener("click", () => {
    initState = !initState;
    if (initState) {
        document.querySelector('.lamp-button').style.color = "blue";
        document.querySelector('.room').style.backgroundColor = "white";
    } else {
        document.querySelector('.lamp-button').style.color = "black";
        document.querySelector('.room').style.backgroundColor = "black";
    }
})

// Bai 3
function changeContent() {
    const quotes = ["Do not pity the dead, Harry. Pity the living, and, above all those who live without love", "It is impossible to manufacture or imitate love", "Being different isn't a bad thing. I means that you are brave enough to be yourself.", "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.", "Never trust anything that can think for itself if you can’t see where it keeps its brain.", "Every human life is worth the same, and worth saving.", "Have a biscuit, Potter.", "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.", "Socks are Dobby’s favorite, favorite clothes, sir!"]
    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.querySelector("p").textContent = quotes[arrayIndex];
}

let cont = document.querySelector("#btn-2");
cont.onclick = changeColor;
function changeColor() {
    const randomHexColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector("p").style.color = "#" + randomHexColor;
}

const but3 = document.querySelector('#btn-3');
but3.addEventListener("click", () => {
    let r = Math.floor(Math.random()*(255 + 1));
    let g = Math.floor(Math.random()*(255 + 1));
    let b = Math.floor(Math.random()*(255 + 1));
    document.querySelector("p").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})

// Bai 4
// document.body.addEventListener("click", (events) => {
//     events.target = document.createElement("div");
//     events.target.innerHTML = `<div class="main1">
//     <div class="square"></div>
// </div>`;
// })