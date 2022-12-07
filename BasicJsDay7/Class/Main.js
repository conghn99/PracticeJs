const btn = document.getElementById("btn");
const image = document.getElementById("image");

// Lắng nghe sự kiện khi bấm vào nút "random"
btn.addEventListener("click", function () {
    getRandomImage()
})

// Cach 1 Gọi API để lấy dữ liệu và hiển thị
async function getRandomImage() {
    try {
        // Gọi API lấy ảnh random của dog
        let res = await axios.get("https://dog.ceo/api/breeds/image/random")

        // Gán URL cho thẻ image
        image.src = res.data.message
    } catch (error) {
        console.log(error);
    }
}

// Cach 2 Gọi API để lấy dữ liệu và hiển thị
function getRandomImage() {
    let res = axios.get("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
        image.src = res.data.message
    })
    .catch(() => {
        console.log("image not found")
    })
}