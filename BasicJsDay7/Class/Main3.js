const btn = document.getElementById('btn');
const image = document.getElementById('image');
const select = document.getElementById('breed-list');
const ul = document.getElementById('ul-list');

function getBreedList() {
    let res = axios.get("https://dog.ceo/api/breeds/list/all")
    res
        .then((resp) => {
            renderBreed(resp.data.message)
        })
        .catch(() => {
            console.log("errors")
        })
}

function renderBreed(breeds) {
    for (key in breeds) {
        let type = document.createElement("option");
        type.innerText = key;
        select.appendChild(type);
    }
}

getBreedList()

btn.addEventListener("click", function () {
    ul.innerHTML = "";
    let content = select.options[select.selectedIndex].text;
    let apis = axios.get(`https://dog.ceo/api/breed/${content}/list`);
    apis
        .then((resp) => {
            console.log(resp.data.message)
            getSubBreedList(resp.data.message, content)
        })
        .catch(() => {
            console.log("error")
        })
})

function getSubBreedList(list, content) {
    if (list.length === 0) {
        let type = document.createElement("li");
        type.innerText = "Không có sub breed";
        ul.appendChild(type);
    } else {
        for (let i = 0; i < list.length; i++) {
            let type = document.createElement("li");
            type.innerHTML= `<a href="#">${list[i]}</a>`;
            ul.appendChild(type);
        }
    }
}

ul.addEventListener("click", (events) => {
    let content = select.options[select.selectedIndex].text;
    const clickTarget = events.target;
    let apis = `https://dog.ceo/api/breed/${content}/${clickTarget.innerText}/images/random`
    getRandomImage(apis)
})

function getRandomImage(api) {
    let res = axios.get(api)
    res
        .then((res) => {
            image.src = res.data.message
        })
        .catch(() => {
            console.log("this patch does not have image")
        })
}