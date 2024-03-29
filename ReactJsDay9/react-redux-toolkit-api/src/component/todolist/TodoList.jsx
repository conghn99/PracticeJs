import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, fetchTodos, updateTodo } from "../../app/slices/todo.slice";

function TodoList() {
    const todos = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");

    // Lấy ds todo ban đầu
    useEffect(() => {
        dispatch(fetchTodos());
    }, [])

    // 1. Thêm todo
    const handleAdd = () => {
        if (title === "") {
            alert("Tiêu đề không được để trống");
            return;
        }

        dispatch(addTodo(title));
        setTitle("");
    };

    // 2. Thay đổi trạng thái
    const handleToggleStatus = (id) => {
        const currentTodo = todos.find((todo) => todo.id === id);
        const updatedTodo = {
            id,
            title: currentTodo.title,
            status: !currentTodo.status,
        };
        dispatch(updateTodo(updatedTodo));
    };

    const handleUpdateTitle = (id) => {
        const currentTodo = todos.find((todo) => todo.id === id);
        const newTitle = window.prompt("Cập nhật tiêu đề", currentTodo.title);

        if(newTitle === null) {
            return;
        }

        if (newTitle.trim() === "") {
            alert("Tiêu đề không được để trống");
            return;
        }

        const updatedTodo = {
            id,
            title: newTitle,
            status: currentTodo.status,
        };

        dispatch(updateTodo(updatedTodo));
    };

    const handleDelete = (id) => {
        // TODO : Thêm confirm trước khi xóa
        if(window.confirm("co chac muon xoa khum?")) {
            dispatch(deleteTodo(id))
        };
    };

    return (
        <>
            <h2>TodoList App</h2>

            <input
                type="text"
                placeholder="Enter title ..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {todos.length === 0 && (
                    <li>Không có công việc nào trong danh sách</li>
                )}
                {todos.length > 0 &&
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <input
                                type="checkbox"
                                checked={todo.status}
                                onChange={() => handleToggleStatus(todo.id)}
                            />
                            <span className={todo.status ? "active" : ""}>
                                {todo.title}
                            </span>
                            <button onClick={() => handleUpdateTitle(todo.id)}>
                                update
                            </button>
                            <button onClick={() => handleDelete(todo.id)}>
                                delete
                            </button>
                        </li>
                    ))}
            </ul>
        </>
    );
}

export default TodoList;