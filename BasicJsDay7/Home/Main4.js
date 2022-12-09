const btn = document.getElementById('btn');
const div2 = document.querySelector('.di2')
btn.addEventListener("click", function () {
    div2.innerHTML = '';
    let content = document.getElementById('word').value;
    let apis = axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${content}`);
    apis
        .then((resp) => {
            renderContent(resp.data[0].meanings)
            renderPronoun(resp.data[0].phonetics)
        })
        .catch(() => {
            console.log("error")
        })
})

function renderContent(resp) {
    for (let i = 0; i < resp.length; i++) {
        let type = document.createElement("div");
        type.classList.add("content");
        type.innerHTML = `
            <p>Part of Speech</p>
            <span>${resp[i].partOfSpeech}</span>`;
        div2.appendChild(type);
        let type2 = document.createElement("div");
        type2.classList.add("content");
        type2.innerHTML = `
            <span>1) ${resp[i].definitions[0].definition}</span>
            <br><br>
            <span>2) ${resp[i].definitions[1].definition}</span>`;
        div2.appendChild(type2);
    }
}

function renderPronoun(resp) {
    let type = document.createElement("AUDIO");
    div2.appendChild(type);
    const att = document.createAttribute("controls");
    const audio = document.querySelector("audio");
    audio.setAttributeNode(att);
    for (let i = 0; i < resp.length; i++) {
        if (resp[i].audio !== "") {
            let src = document.createElement("source");
            audio.appendChild(src);
            const sour = document.createAttribute("src");
            sour.value = resp[i].audio;
            document.querySelector("source").setAttributeNode(sour);
            break;
        }
    }
}