import { Route, Routes } from 'react-router-dom'
import Layout from './component/Layout/Layout'
import BlogDetail from './pages/blog/BlogDetail'
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import TagDetail from './pages/tags/TagDetail'
import TagList from './pages/tags/TagList'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='blogs/:blogId' element={<BlogDetail />}></Route>
          <Route path='search' element={<Search />}></Route>
          <Route path='tags'>
            <Route index element={<TagList />} />
            <Route path=':tagId/:tagName' element={<TagDetail />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
