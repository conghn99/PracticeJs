const API_URL = "http://localhost:8080/api/v1";
const cityList = document.getElementById('address');
const create = document.getElementById('btn-save');

function getCityList() {
    let res = axios.get("https://provinces.open-api.vn/api/p/")
    res
        .then((resp) => {
            renderCity(resp.data)
        })
        .catch((errors) => {
            console.log(errors)
        })
}

getCityList();

function renderCity(cities) {
    let html = `<option>$Thành phố/Tỉnh</option>`;
    cities.forEach((city) => {
        html += `<option value="${city.name}">${city.name}</option>`;
    });
    address.innerHTML = html;
}

create.addEventListener("click", () => {
    let res = axios.post(`${API_URL}/users`, {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        phone : document.getElementById('phone').value,
        address : cityList.options[cityList.selectedIndex].text,
        password : document.getElementById('password').value,
    })
    res
        .then((resp) => {
            alert(`Đăng ký thành công user ${resp.data.name}`);
        })
        .catch((errors) => {
            console.log(errors)
        })
})