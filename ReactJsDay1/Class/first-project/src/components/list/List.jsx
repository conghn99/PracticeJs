import React, { useState } from 'react'

function List() {
    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
    const [hideShow, setHideShow] = useState(true)
    const [tittle, setTitle] = useState("")
    const changeState = () => {
        setHideShow(!hideShow)
    }
    const addItem = () => {
        if (tittle === '') {
            alert("Tiêu đề ko đc để trống");
            return;
        }
        setItems([...items, tittle]);
        setTitle("")
    }
    const removeItem = () => {
        if(items.length === 0) {
            return;
        }
        setItems(items.slice(0 ,-1))
    }
  return (
    <div>
        <button value={hideShow} onClick={changeState}>{hideShow ? "Hide" : "Show"}</button>
        <input id='inp' type="text" placeholder="Enter name" value={tittle} onChange={(e) => setTitle(e.target.value)}/>
        <button onClick={addItem} >Add</button>
        <button onClick={removeItem}>Remove</button>
        {hideShow && (
            <ul id="list">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        )}
    </div>
  )
}

export default List