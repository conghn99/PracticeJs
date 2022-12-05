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
but.addEventListener("click", (events) => {
    const tar = events.target;
    if (tar.textContent === "+") {
        document.querySelector('.number').textContent = nums++;
    } else if (tar.textContent === "-") {
        document.querySelector('.number').textContent = nums--;
    } else return;
})

// Bai 2
const light = document.querySelector('.lamp-button');
light.addEventListener("click", () => {
    document.querySelector('.main').firstElementChild.classList.toggle("room");
})

// Bai 3