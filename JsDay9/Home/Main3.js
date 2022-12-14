const API_URL = "http://localhost:8080/api/v1";
const todoListEl = document.getElementById("todo-list");
const btn = document.getElementById("add");
const inp = document.getElementsByTagName("input");
const span = document.getElementsByTagName("span");
let todos = [];

const getTodo = async () => {
    try {
        let res = await axios.get(`${API_URL}/todos`);
        todos = res.data;

        // Hiển thị lên trên giao diện
        renderTodo(todos);

    } catch (error) {
        console.log(error);
    }
}

getTodo()

const renderTodo = (arr) => {
    todoListEl.innerHTML = "";
    if(arr.length === 0) {
        todoListEl.innerHTML = '<li>Ko có công việc nào trong danh sách</li>';
        return
    }

    let html = "";
    arr.forEach(t => {
        html += `
            <li>
                <input type="checkbox" ${t.status ? "checked" : ""} onclick=updateTodoStatus(${t.id}) data-type=${t.id}>
                <span data-type=${t.id} class=${t.status ? "todo-active" : ""}>${t.title}</span>
                <button onclick="updateTodoTittle(${t.id})">Update</button>
                <button onclick="deleteTodo(${t.id})">Delete</button>
            </li>`
    });
    todoListEl.innerHTML = html;
}

btn.addEventListener("click", async () => {
    try {
        let val = document.getElementById("inp").value;
        let res = await axios.post(`http://localhost:8080/api/v1/todos`, {
            title : val
        })
        todoListEl.innerHTML += `
            <li>
                <input type="checkbox" onclick=updateTodoStatus(${res.data.id}) data-type=${res.data.id}>
                <span data-type=${res.data.id} class="">${res.data.title}</span>
                <button onclick="updateTodoTittle(${res.data.id})">Update</button>
                <button onclick="deleteTodo(${res.data.id})">Delete</button>
            </li>`
    } catch (error) {
        console.log(error);
    }
})

const updateTodoTittle = async (id) => {
    try {
        let val = document.getElementById("inp").value;
        let stat;
        for (let nod of inp) {
            if(nod.dataset.type == id) {
                stat = nod.checked;
            }
        }
        await axios.put(`http://localhost:8080/api/v1/todos/${id}`, {
            title : val,
            status : stat
        })
        getTodo();
    } catch (error) {
        console.log(error);
    }
}

const updateTodoStatus = async (id) => {
    try {
        let val;
        let stat;
        for (let nod of inp) {
            if(nod.dataset.type == id) {
                stat = nod.checked;
            }
        }
        for (let nod of span) {
            if(nod.dataset.type == id) {
                val = nod.textContent;
            }
        }
        await axios.put(`http://localhost:8080/api/v1/todos/${id}`, {
            title : val,
            status : stat
        });
        getTodo();
    } catch (error) {
        console.log(error);
    }
}

const deleteTodo = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/api/v1/todos/${id}`)
        getTodo();
    } catch (error) {
        console.log(error);
    }
}