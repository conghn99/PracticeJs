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
    const [dtb, setDtb] = useState(data)
    const [oneUser, setOneUser] = useState(true);
    const [noUser, setNoUser] = useState(true)
    let randomNum = Math.floor(Math.random() * dtb.length);
    const [user, setUser] = useState(data[randomNum]) 
    const randomUser = () => {
        let randomNums = Math.floor(Math.random() * dtb.length);
        if (user.name === dtb[randomNums].name) {
            randomUser();
        } else {
            setUser(dtb[randomNums])
        } 
    }
    const removeUser = () => {
        const index = dtb.indexOf(user);
        dtb.splice(index, 1);
        setDtb(dtb);
        let randomNums = Math.floor(Math.random() * dtb.length);
        setUser(dtb[randomNums]);
        if (dtb.length < 2) {
            setOneUser(false);
        } else {
            setOneUser(true);
        }
        if (dtb.length === 0) {
            setNoUser(false)
        } else {
            setNoUser(true)
        }
    }
    if (noUser) {
        return (
            <div>
                <h2 style={{color : "red"}}>Name : {user.name}</h2>
                <ul>
                    <li>Email: {user.email}</li>
                    <li>Address: {user.address}</li>
                </ul>
                {oneUser && (
                    <button onClick={randomUser}>Random user</button>
                )}
                <button onClick={removeUser}>Delete user</button>
            </div>
          )
    } else {
        return (
            <p>Không còn user nào trong danh sách</p>
        )
    }
}

export default User