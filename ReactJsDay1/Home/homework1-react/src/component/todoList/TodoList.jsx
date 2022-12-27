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
    const handleToggleStatus = async (e) => {
        try {
            let res = await axios.put(`${API_URL}/${e.target.dataset.id}`, {
                title : e.target.dataset.title,
                status : e.target.checked
            })
            const temp = []
            temp.push(res.data)
            setTodo(todo.map(obj => temp.find(o => o.id === obj.id) || obj))
        } catch (error) {
            console.log(error)
        }
    }
    const handleUpdateTitle = async (e) => {
        try {
            let val = window.prompt("Title", e.target.dataset.title)
            let res = await axios.put(`${API_URL}/${e.target.dataset.id}`, {
                title : val,
                status : e.target.dataset.status
            })
            const temp = []
            temp.push(res.data)
            setTodo(todo.map(obj => temp.find(o => o.id === obj.id) || obj))
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
                    <input type="checkbox" checked={td.status} onChange={handleToggleStatus} data-id={td.id} data-title={td.title}></input>
                    <span className={td.status ? 'active' : ''}>{td.title}</span>
                    <button onClick={handleUpdateTitle} data-status={td.status} data-id={td.id} data-title={td.title}>Update</button>
                    <button onClick={() => handleDelete(td.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList