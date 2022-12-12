const API_URL = "http://localhost:8080/api/v1";
const todoListEl = document.getElementById("todo-list")
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
                <input type="checkbox" ${t.status ? "checked" : ""}>
                <span class=${t.status ? "todo-active" : ""}>${t.title}</span>
                <button onclick="updateTodo(${t.id})">Update</button>
                <button onclick="deleteTodo(${t.id})">Delete</button>
            </li>`
    });
    todoListEl.innerHTML = html;
}

const updateTodo = id => {

}

const deleteTodo = id => {
    
}