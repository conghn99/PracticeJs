import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../app/Service/auth.service';
import styles from "./Login.module.css"

function Login() {
    const {isAuthenticated} = useSelector((state) => state.auth)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [login] = useLoginMutation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login({username, password})
            .unwrap()
            .then(() => {
                alert("Login thanh cong")

                setTimeout(() => {
                    navigate("/admin/blogs")
                }, 1500)
            })
            .catch(err => {
                alert(err)
            })
    }

    if (isAuthenticated) {
        return <Navigate to={"/admin/blogs"}/>
    }
  return (
    <>
    <div className={styles.loginPage}>
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
                <button type="submit">login</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login