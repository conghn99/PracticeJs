const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const plus = document.getElementById("plus");
const refresh = document.getElementById("refresh");
const div = document.getElementById("divmain");

btn.addEventListener("click", () => {
    div.innerHTML = '';
    let val = inp.value;
    let apis = axios.get(`https://api.weatherbit.io/v2.0/current?city=${val}&key=7b8f59e21ccd449a99e5b146196f9c35`);
    apis
        .then((resp) => {
            console.log(resp.data.data[0])
            getInfo(resp.data.data[0])
        })
        .catch(() => {
            console.log("error")
        })
})

function getInfo(resp) {
    let type = document.createElement("div");
    const att = document.createAttribute("class");
    att.value = resp.city_name;
    type.setAttributeNode(att);
    type.innerHTML = `
        <p>City: </p>
        <span id="${resp.city_name}">${resp.city_name}</span>
        <p>Current Time: </p>
        <span id="time">${resp.ob_time.substring(0, 10)}</span>
        <p>Date: </p>
        <span id="date">${resp.ob_time.substring(11, 16)}</span>
        <p>Temperature: </p>
        <span id="temperature">${resp.temp}</span>
        <p>Humidity: </p>
        <span id="humidity">${resp.rh}</span>
        <p>Sunrise time: </p>
        <span id="rise">${resp.sunrise}</span>
        <p>Sunset time: </p>
        <span id="set">${resp.sunset}</span>
        <p>Weather status: </p>
        <img src="https://www.weatherbit.io/static/img/icons/${resp.weather.icon}.png">
        <br>
        <button onclick="remove(this)" id="remove" class="${resp.city_name}">Remove</button>`;
    div.appendChild(type);
}

plus.addEventListener("click", () => {
    let val = inp.value;
    let apis = axios.get(`https://api.weatherbit.io/v2.0/current?city=${val}&key=7b8f59e21ccd449a99e5b146196f9c35`);
    apis
        .then((resp) => {
            if (div.childElementCount <= 2 && document.getElementById(`${resp.data.data[0].city_name}`) === null) {
                getInfo(resp.data.data[0])
            } else {
                console.log("error")
            }
        })
        .catch(() => {
            console.log("error")
        })
})

function remove(events) {
    let val = events.getAttribute("class");
    console.log(val);
    document.getElementsByClassName(`${val}`)[0].remove();
}

refresh.addEventListener("click", () => {
    if (div.children.length !== 0) {
        for (var i = 0; i < div.children.length; i++) {
            let apis = axios.get(`https://api.weatherbit.io/v2.0/current?city=${div.children[i].getAttribute("class")}&key=7b8f59e21ccd449a99e5b146196f9c35`);
            apis
                .then((resp) => {
                    console.log(resp.data.data[0])
                    updateInfo(resp.data.data[0])
                })
                .catch(() => {
                    console.log("error")
                })
        }
    }
})

function updateInfo(resp) {
    let type = document.getElementsByClassName(`${resp.city_name}`)[0];
    type.innerHTML = `
        <p>City: </p>
        <span id="${resp.city_name}">${resp.city_name}</span>
        <p>Current Time: </p>
        <span id="time">${resp.ob_time.substring(0, 10)}</span>
        <p>Date: </p>
        <span id="date">${resp.ob_time.substring(11, 16)}</span>
        <p>Temperature: </p>
        <span id="temperature">${resp.temp}</span>
        <p>Humidity: </p>
        <span id="humidity">${resp.rh}</span>
        <p>Sunrise time: </p>
        <span id="rise">${resp.sunrise}</span>
        <p>Sunset time: </p>
        <span id="set">${resp.sunset}</span>
        <p>Weather status: </p>
        <img src="https://www.weatherbit.io/static/img/icons/${resp.weather.icon}.png">
        <br>
        <button onclick="remove(this)" id="remove" class="${resp.city_name}">Remove</button>`;
}
