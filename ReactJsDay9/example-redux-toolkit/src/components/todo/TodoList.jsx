import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../../app/slices/todo.slice';

function TodoList() {
    const randomId = () => {
        return Math.floor(Math.random() * 1000);
    }
    const todos = useSelector(state => state.todo)
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    
    const handleAdd =  () => {
        if(title === "") {
            alert("tieu de ko dc de trong");
            return;
        }
        dispatch(addTodo({
            id : randomId(),
            title,
            status : false
        }))
    }
    const handleToggleStatus = (id) => {
        const currTodo = todos.find(todo => todo.id === id)
        const updatedTodo = {
            id,
            title : currTodo.title,
            status : !currTodo.status
        }
        dispatch(updateTodo(updatedTodo))
    }
    const handleUpdateTitle = (id) => {
        const currTodo = todos.find(todo => todo.id === id)
        const newTitle = window.prompt("Cap nhat tieu de", currTodo.title)
        if (newTitle === null) return;
        if (newTitle.trim() === "") {
            alert("tieu de ko dc de trong")
            return;
        }
        const updatedTodo = {
            id,
            title: newTitle,
            status: currTodo.status
        }
        dispatch(updateTodo(updatedTodo))
    }
    const handleDelete = async (id) => {
        if(window.confirm("co chac muon xoa khum?")) {
            dispatch(deleteTodo(id))
        }
    }
  return (
    <div>
        <h2>TodoList App</h2>

        <input type="text" placeholder="Enter title..." value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <button onClick={handleAdd}>Add</button>
        <ul>
            {todos.length === 0 && (
                <li>Ko có công việc nào trong danh sách</li>
            )}
            {todos.length > 0 && todos.map((td) => (
                <li key={td.id}>
                    <input type="checkbox" checked={td.status} onChange={() => handleToggleStatus(td.id)}></input>
                    <span className={td.status ? 'active' : ''}>{td.title}</span>
                    <button onClick={() => handleUpdateTitle(td.id)}>Update</button>
                    <button onClick={() => handleDelete(td.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList