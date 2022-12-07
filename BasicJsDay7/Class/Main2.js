const btn = document.getElementById('btn');
const image = document.getElementById('image');
const select = document.getElementById('breed-list');

function getBreedList() {
    let res = axios.get("https://dog.ceo/api/breeds/list/all")
    res
        .then((resp) => {
            console.log(resp.data.message)
            renderBreed(resp.data.message)
        })
        .catch((errors) => {
            console.log(errors)
        })
}

function renderBreed(breeds) {
    for (key in breeds) {
        let type = document.createElement("option");
        type.innerText = key;
        select.appendChild(type);
    }
    let types = document.createElement("option");
    types.innerText = "bruh";
    select.appendChild(types);
}

getBreedList()

btn.addEventListener("click", function () {
    let content = select.options[select.selectedIndex].text;
    let apis = `https://dog.ceo/api/breed/${content}/images/random`;
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