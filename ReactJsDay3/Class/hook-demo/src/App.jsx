import React from 'react'
import { useState } from 'react'
import Blog from './Component/Blog/Blog'
import Content from './Component/Content/Content'
import Menu from './Component/Menu/Menu'
import Post from './Component/Post/Post'
import TodoList from './Component/todoList/TodoList'

function App() {
  const [isShow, setIsShow] = useState(true);
  const toggle = () => {
    setIsShow(!isShow)
  }
  return (
    <div>
        {/* <Content /> */}

        {/* <Post /> */}

        {isShow && <Menu />}

        <button onClick={toggle}>Toggle</button>

        {/* <Blog /> */}

        <TodoList />
    </div>
  )
}

export default App