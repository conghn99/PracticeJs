import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'

// useEffect(callback, dependences)
// TH1: useEffect(callback) : Đc gọi sau mỗi lần re-render
// TH2: useEffect(callback, []) : Chỉ dc gọi 1 lần duy nhất sau lần render đầu tiên
// TH3: useEffect(callback, [dependences]) : Đc gọi khi deps thay đổi giá trị

// Đặc điểm chung : Đều chạy sau lần render đầu tiên

function Post() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [type, setType] = useState("posts")

    useEffect(() => {
        const getPosts = async () => {
            try {
                setLoading(true)
                let res = await axios.get(`https://jsonplaceholder.typicode.com/${type}`)
                setPosts(res.data)
                setLoading(false)
            } catch(error) {
                console.log(error)
            }
        }
        getPosts()
    },[type])
    // TH1: useEffect(callback)
    // useEffect(() => {
    //     console.log("useEffect(callback)")
    // })

    // TH2: useEffect(callback, [])
    // useEffect(() => {
    //     console.log("useEffect(callback, [])")
    // }, [])

    // TH3: useEffect(callback, [dependences])
    useEffect(() => {
        console.log("useEffect(callback, [deps])")
    }, [count])
    const increment = () => {
        setCount(count => count + 1)
    }
    const decrement = () => {
        setCount(count => count - 1)
    }

    const increment1 = () => {
        setCount1(count1 => count1 + 1)
    }
    const decrement1 = () => {
        setCount1(count1 => count1 - 1)
    }
    if (loading) {
        return <h2>Loading ...</h2>
    }
    return (
    <div>
        {console.log("render")}
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

        <h1>Count: {count1}</h1>
        <button onClick={increment1}>Increment</button>
        <button onClick={decrement1}>Decrement</button>

        <hr />
        <h2>Type: {type}</h2>
        {/* <button onClick={() => setType("posts")} style={type === "posts" ? { backgroundColor: "red"} : {}}>Posts</button>
        <button onClick={() => setType("comments")} style={type === "comments" ? { backgroundColor: "red"} : {}}>Comments</button>
        <button onClick={() => setType("albums")} style={type === "albums" ? { backgroundColor: "red"} : {}}>Albums</button> */}
        {["posts", "comments", "albums"].map((e, i) => (
            <button key={i} onClick={() => setType(e)} style={type === e ? { backgroundColor: "red"} : {}}>{e}</button>
        ))}
        <ul>
            {posts.map(p => (
                <li key={p.id}>{p.title || p.body}</li>
            ))}
        </ul>
    </div>
  )
}

export default Post