import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Counter from './component/counter/Counter'
import Todo from './component/todo/Todo'
import NotFound from './component/not-found/NotFound'

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to={"/counter"}>Counter App</Link>
        </li>
        <li>
          <Link to={"/todo"}>Todo App</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
