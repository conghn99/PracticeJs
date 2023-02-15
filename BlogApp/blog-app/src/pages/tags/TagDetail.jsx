import React from 'react'
import { useGetBlogsByTagIdQuery } from '../../app/Service/blog.service'
import { Link, useParams } from 'react-router-dom'

function TagDetail() {
    const {tagId, tagName} = useParams()
    const {data, isLoading} = useGetBlogsByTagIdQuery(tagId)

    if (isLoading) {
      return <h2>Loading....</h2>
    }

    console.log(data)

  return (
    <>
      <header className="page-header">
          <h1>{tagName}</h1>
      </header>
      {data.length > 0 && data.map((td, i) => (
        <article className="post-entry tag-entry" key={i}>
            <header className="entry-header">
                <h2>{td.title}</h2>
            </header>
            <div className="entry-content">
                <p>{td.description}</p>
            </div>
            <footer className="entry-footer"><span title="2018-10-22 00:00:00 +0000 UTC">22/10/2018</span>&nbsp;·&nbsp;3 phút
            </footer>
            <Link to={`/blogs/${td.id}`} className="entry-link"/>
        </article> 
      ))}
    </>
  )
}

export default TagDetail