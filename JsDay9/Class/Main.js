const btn = document.querySelectorAll("button");
const colorEl = document.getElementById("color")
// for (let i = 0; i < btn.length; i++) {
//     btn[i].addEventListener("click", async () => {
//         try {
//             let res = await axios.get(`http://localhost:8080/random-color?type=${i + 1}`)
//             document.body.style.backgroundColor = res.data;
//             colorEl.innerHTML = res.data;
//         } catch {
//             console.log("error")
//         }
//     })
// }

// TH nếu type là bất kỳ
btn.forEach(btns => {
    btns.addEventListener("click", async () => {
        try {
            let dat = btns.dataset.type
            let res = await axios.get(`http://localhost:8080/random-color?type=${dat}`)
            document.body.style.backgroundColor = res.data;
            colorEl.innerHTML = res.data;
        } catch {
            console.log("error")
        }
    })
})
