const API_URL = "http://localhost:8080/api/v1";
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const changePswd = document.getElementById("btn-change-password");
const forgotPswd = document.getElementById("btn-forgot-password");
const saveChange = document.getElementById("btn-save");
const showImage = document.getElementById("btn-modal-image");
const displayImage = document.getElementById("display-img");

console.log(window.location.href);
let lastIndexOf = window.location.href.lastIndexOf("=")
let id = window.location.href.substring(lastIndexOf + 1);

const getCityList = async () => {
    try {
        let res = await axios.get("https://provinces.open-api.vn/api/p/");
        renderCity(res.data);
    } catch (error) {
        console.log(error);
    }
}

getCityList();

function renderCity(cities) {
    let html = "";
    cities.forEach((city) => {
        html += `<option value="${city.name}">${city.name}</option>`;
    });
    address.innerHTML = html;
}

const getUserInfo = async () => {
    try {
        let res = await axios.get(`${API_URL}/users/${id}`);

        // Hiển thị lên trên giao diện
        renderUserInfo(res.data);

    } catch (error) {
        console.log(error);
    }
}

getUserInfo();

const renderUserInfo = (info) => {
    fullname.value = info.name;
    email.value = info.email;
    phone.value = info.phone;
    console.log(address)
    console.log(address.length)
    for (let i = 0; i < address.length; i++) {
        let option = address.options[i];
        console.log(option)
        if (option.value == info.address) {
            const att = document.createAttribute("selected");
            option.setAttributeNode(att);
        }
    }
}

changePswd.addEventListener("click", async () => {
    try {
        await axios.put(`${API_URL}/users/${id}/update-password`, {
            oldPassword : document.getElementById("old-password").value,
            newPassword : document.getElementById("new-password").value
        });
        alert("Đổi mật khẩu thành công");
    } catch (error) {
        console.log(error);
    }
})

forgotPswd.addEventListener("click", async () => {
    try {
        let res = await axios.post(`${API_URL}/users/${id}/forgot-password`);
        alert(`Mật khẩu mới là ${res.data}`);
    } catch (error) {
        console.log(error);
    }
})

saveChange.addEventListener("click", async () => {
    try {
        await axios.put(`${API_URL}/users/${id}`, {
            name : fullname.value,
            phone : phone.value,
            address : address.options[address.selectedIndex].text
        });
        getUserInfo();
        alert("Cập nhật thành công")
    } catch (error) {
        console.log(error);
    }
})

showImage.addEventListener("click", async () => {
    try {
        displayImage.innerHTML = "";
        let res = await axios.get(`${API_URL}/users/${id}/files`);
        console.log(res.data)
        if(res.data.length === 0) {
            displayImage.innerHTML = "Ko có ảnh nào"
        } else {
            let html = "";
            res.data.forEach(dat => {
                let src = `http://localhost:8080${dat}`;
                let lastIndex = src.lastIndexOf("/");
                let ids = src.substring(lastIndex + 1);
                html += `<div class="image-item">
                            <img src="${src}" id="${ids}" onclick=targetImg(this) alt="">
                        </div>`
            })
            displayImage.innerHTML = html
        }
    } catch (error) {
        console.log(error);
    }
})

const targetImg = (event) => {
    event.classList.toggle("my-style");
    console.log(displayImage.childNodes)
    for (let nod of displayImage.childNodes) {
        if (nod.firstElementChild !== event) {
            nod.firstElementChild.classList.remove("my-style");
        }
    }
}