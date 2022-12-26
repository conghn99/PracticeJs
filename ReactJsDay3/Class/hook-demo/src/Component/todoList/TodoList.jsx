import axios from 'axios';
import React, { useEffect, useState } from 'react'

const API_URL = "http://localhost:8080/api/v1/todos"
function TodoList() {
    const [todo, setTodo] = useState([]);
    const [title, setTitle] = useState("")
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                let res = await axios.get(API_URL)
                setTodo(res.data)
            } catch (error) {
                console.log(error)
            } 
        }
        fetchTodos();
    }, []);
    
    const handleAdd = async () => {
        try {
            let res = await axios.post(API_URL, {
                title : title
            })
            setTodo([...todo, res.data])
        } catch (error) {
            console.log(error)
        }
    }
    const handleToggleStatus = async (id) => {
        
    }
    const handleUpdateTitle = (id) => {
        try {
            // let val = window.prompt("Title")
            // let res = await axios.put(`${API_URL}/${id}`, {
            //     title : title,
            //     status : 
            // })
        } catch (error) {
            console.log(error)
        }
    }
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`)
            setTodo(todo.filter(td => td.id !== id))
        } catch (error) {
            console.log(error)
        } 
    }
  return (
    <div>
        <h2>TodoList App</h2>

        <input type="text" placeholder="Enter title..." value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <button onClick={handleAdd}>Add</button>
        <ul>
            {todo.length === 0 && (
                <li>Ko có công việc nào trong danh sách</li>
            )}
            {todo.length > 0 && todo.map((td) => (
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