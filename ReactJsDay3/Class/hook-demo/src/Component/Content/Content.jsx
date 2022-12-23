import React from 'react'
import { useState } from 'react';
import { faker } from '@faker-js/faker';

const orders = [
    {id : 1, total: 10000},
    {id : 2, total: 20000},
    {id : 3, total: 30000}
]
function Content() {
    // const totalMoney = orders.reduce((a, b) => a + b.total, 0)
    const [total, setTotal] = useState(() => {
        orders.reduce((a, b) => a + b.total, 0);
    })
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([
        {id: 1, name: "Sản phẩm 1", price: 100000},
        {id: 2, name: "Sản phẩm 2", price: 200000},
        {id: 3, name: "Sản phẩm 3", price: 300000}
    ])
    const [user, setUser] = useState({
        id: 1,
        name: "Bùi Hiên",
        email: "hien@gmail.com"
    });
    const increment = () => {
        setCount(count + 1) // bất đồng bộ
        console.log(count)
    }
    const decrement = () => {
        setCount(count => count - 1);
        setCount(count => count - 1);
        setCount(count => count - 1)
    }
    const updatePrice = () => {
        const productId = 1;
        const newPrice = Math.floor(Math.random() * (1000000 - 10000 + 1) + 10000) 
        const newProducts = products.map(p => {
            if (p.id === productId) {
                return {...p, price: newPrice}
            }
            return p;
        })
        setProducts(newProducts);
    }
    const updateName = () => {
        const rdName = faker.name.fullName();
        setUser({...user, name : rdName})
    }
  return (
    <div>
        {console.log("render")}
        <h2>Total: {total}</h2>
        <hr />
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

        <hr />

        <h2>Danh sách sản phẩm</h2>
        <ul>
            {products.map((p) => (
                <li key={p.id}>{p.id} - {p.name} - {p.price}</li>
            ))}
        </ul>
        <button onClick={updatePrice}>Update price</button>

        <hr />

        <h2>Thông tin user</h2>
        <p>Id: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <button onClick={updateName}>Update name</button>
    </div>
  )
}

export default Content