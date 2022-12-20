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
const delImage = document.getElementById("btn-delete-image");
const btnChoseImg = document.getElementById("btn-chose-image");
const avtPreview = document.getElementById("avatar-preview");
const modalImgEl = new bootstrap.Modal(document.getElementById('modal-image'), {
    keyboard: false
})
const avatarEl = document.getElementById("avatar");

const params = new URLSearchParams(window.location.search);
let id = params.get("id");
if(!id) {
    window.location.href = "./404.html"
}

const getCityList = async () => {
    try {
        let res = await axios.get("https://provinces.open-api.vn/api/p/");
        renderCity(res.data);
        getUserInfo();
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



const renderUserInfo = (info) => {
    fullname.value = info.name;
    email.value = info.email;
    phone.value = info.phone;
    document.getElementById("avatar-preview").src = `http://localhost:8080${info.avatar}`;
    for (let i = 0; i < address.length; i++) {
        let option = address.options[i];
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

let images = [];

const getImage = async () => {
    try {
        displayImage.innerHTML = "";
        let res = await axios.get(`${API_URL}/users/${id}/files`);
        if(res.data.length === 0) {
            displayImage.innerHTML = "Ko có ảnh nào"
        } else {
            images = res.data;
            renderPaginationAndRenderImage(res.data);   
            // let html = "";
            // res.data.forEach(dat => {
            //     let src = `http://localhost:8080${dat}`;
            //     let lastIndex = src.lastIndexOf("/");
            //     let ids = src.substring(lastIndex + 1);
            //     html += `<div class="image-item">
            //                 <img src="${src}" id="${ids}" onclick=targetImg(this) alt="ảnh">
            //             </div>`
            // })
            // displayImage.innerHTML = html
        }
    } catch (error) {
        console.log(error);
    }
}

getImage()

const renderPaginationAndRenderImage = arr => {
    $('.pagination-container').pagination({
        dataSource: arr,
        pageSize : 8,
        callback: function(data, pagination) {
            let html = "";
            data.forEach(dat => {
                let src = `http://localhost:8080${dat}`;
                let lastIndex = src.lastIndexOf("/");
                let ids = src.substring(lastIndex + 1);
                html += `<div class="image-item">
                            <img src="${src}" id="${ids}" onclick=targetImg(this) alt="ảnh" data-url="${dat}">
                        </div>`
            })
            displayImage.innerHTML = html;
            btnChoseImg.disabled = true;
            delImage.disabled = true
        }
    })
}

const targetImg = (event) => {
    //highlight hình ảnh
    event.classList.toggle("my-style");
    for (let nod of displayImage.childNodes) {
        if (nod.firstElementChild !== event) {
            nod.firstElementChild.classList.remove("my-style");
        }
    }

    //active chức năng
    if(!event.classList.contains("my-style")) {
        btnChoseImg.disabled = true;
        delImage.disabled = true;
    } else {
        btnChoseImg.disabled = false;
        delImage.disabled = false;
    }
}

delImage.addEventListener("click", async () => {
    try {
        for (let nod of displayImage.childNodes) {
            if (nod.firstElementChild.classList.contains("my-style")) {
                const url = nod.firstElementChild.src;
                await axios.delete(url);
                images = images.filter(i => !url.includes(i));
                renderPaginationAndRenderImage(images);
            }
        }
    } catch (error) {
        console.log(error);
    }
})

btnChoseImg.addEventListener("click", async () => {
    try {
        for (let nod of displayImage.childNodes) {
            if (nod.firstElementChild.classList.contains("my-style")) {
                const url = nod.firstElementChild.dataset.url;
                await axios.put(`${API_URL}/users/${id}/update-avatar`, {
                    avatar : url,
                });
                avtPreview.src = `http://localhost:8080${url}`;
                modalImgEl.hide()
            }
        }
    } catch (error) {
        console.log(error);
    }
})

avatarEl.addEventListener("change", async (e) => {
    try {
        // Lấy ra file upload
        const file = e.target.files[0];

        // Tạo đối tượng form-data
        const formData = new FormData();
        formData.append("file", file);

        // Gọi API
        const res = await axios.post(`${API_URL}/users/${id}/files`, formData);

        // Cập nhật UI
        images.unshift(res.data);
        renderPaginationAndRenderImage(images);
    } catch (error) {
        console.log(error)
    }
})