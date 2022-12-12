const btn1 = document.getElementById("get");
const btn2 = document.getElementById("post");

btn1.addEventListener("click", async () => {
    try {
        let val1 = document.getElementById("weight").value;
        let val2 = document.getElementById("height").value;
        let res = await axios.get(`http://localhost:8080/bmi-get?height=${val2}&weight=${val1}`)
        console.log(res);
        document.getElementById("result").innerHTML = `BMI: ${res.data}`;
    } catch {
        console.log("error")
    }
})

btn2.addEventListener("click", async () => {
    try {
        let val1 = document.getElementById("weight").value;
        let val2 = document.getElementById("height").value;
        let res = await axios.post(`http://localhost:8080/bmi-post`, {
            height: val2,
            weight: val1
          })
        console.log(res)
        document.getElementById("result").innerHTML = `BMI: ${res.data}`;
    } catch {
        console.log("error")
    }
})