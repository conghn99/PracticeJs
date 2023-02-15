import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useGetBlogsByKeywordQuery } from '../../app/Service/blog.service';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function Search() {
  const [title, setTitle] = useState("");
  const {data, isLoading} = useGetBlogsByKeywordQuery(title);

  const schema = yup.object({
    title: yup.string().required(),
    age: yup.number().positive().integer().required(),
  }).required();

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  if (isLoading) {
    return <h2>Loading....</h2>
  }

  console.log(data)

  return (
    <>
        <header className="page-header">
            <h1>Search</h1>
            <div className="post-description">Tìm kiếm bài viết</div>
            <div className="post-meta"></div>
        </header>
        <div id="searchbox">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input id="searchInput" autoFocus placeholder="Tìm kiếm bài viết" aria-label="search" type="search"
                autoComplete="off" value={title} onChange={(e) => setTitle(e.target.value)} {...register("title")}/>
            <span>{errors.title?.message}</span>
          </form>
          <ul id="searchResults" aria-label="search results">
            {title !== "" && data.length > 0 && data.map((b, i) => (
              <li className="post-entry" key={i}>
                <header className="entry-header">{b.title}&nbsp;»</header>
                <Link to={`/blogs/${b.id}`}></Link>
              </li>
            ))}
          </ul>
        </div>
    </>
  )
}

export default Search