import React, { useState } from 'react'

function User() {
    let data = [
        {
            id: 1,
            name: "Bùi Hiên",
            email: "hien@gmail.com",
            address: "Thái Bình",
        },
        {
            id: 2,
            name: "Thu Hằng",
            email: "hang@gmail.com",
            address: "Hải Dương",
        },
        {
            id: 3,
            name: "Minh Duy",
            email: "duy@gmail.com",
            address: "Hưng Yên",
        },
    ];
    let randomNum = Math.floor(Math.random() * data.length);
    const [user, setUser] = useState(data[randomNum])
    const randomUser = () => {
        let randomNums = Math.floor(Math.random() * data.length);
        setUser(data[randomNums])
    }
    const removeUser = () => {
        // data.filter(u => u !== user)
    }
  return (
    <div>
        <h2 style={{color : "red"}}>Name : {user.name}</h2>
        <ul>
            <li>Email: {user.email}</li>
            <li>Address: {user.address}</li>
        </ul>
        <button onClick={randomUser}>Random user</button>
        <button onClick={removeUser}>Delete user</button>
    </div>
  )
}

export default User