const API_URL = "http://localhost:8080/api/v1";
const listTr = document.getElementById("list");
const search = document.getElementById("search");
let list = [];

const getList = async () => {
    try {
        let res = await axios.get(`${API_URL}/user`);
        list = res.data;
        console.log(res.data)

        // Hiển thị lên trên giao diện
        renderList(list);

    } catch (error) {
        console.log(error);
    }
}

getList()

const renderList = (list) => {
    listTr.innerHTML = "";
    if(list.length === 0) {
        listTr.innerHTML = '<tr>Ko có user nào trong danh sách</tr>';
        return;
    }

    let html = "";
    list.forEach(i => {
        html += `<tr>
                    <td>${i.id}</td>
                    <td>${i.name}</td>
                    <td>${i.email}</td>
                    <td>${i.phone}</td>
                    <td>${i.address}</td>
                    <td>
                        <a href="./detail.html?id=${i.id}" class="btn btn-success">Xem chi tiết</a>
                        <button onclick="deleteUser(${i.id})" class="btn btn-danger">Xóa</button>
                    </td>
                </tr>`
    
    })
    listTr.innerHTML = html;
}

search.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
        let val = document.getElementById("search").value;
        try {
            let res = await axios.get(`${API_URL}/search?name=${val}`);
            list = res.data;
            let html = "";
            list.forEach(i => {
                html += `<tr>
                            <td>${i.id}</td>
                            <td>${i.name}</td>
                            <td>${i.email}</td>
                            <td>${i.phone}</td>
                            <td>${i.address}</td>
                            <td>
                                <a href="./detail.html?id=${i.id}" class="btn btn-success">Xem chi tiết</a>
                                <button onclick="deleteUser(${i.id})" class="btn btn-danger">Xóa</button>
                            </td>
                        </tr>`
            
            })
            listTr.innerHTML = html;
        } catch (error) {
            console.log(error);
        }
    }
})

const deleteUser = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/api/v1/users/${id}`)
        getList();
    } catch (error) {
        console.log(error);
    }
}
