import React from 'react'
import { Link } from 'react-router-dom'
import { useGetBlogsQuery } from '../../app/Service/blog.service'
import { useGetTopFiveTagsQuery } from '../../app/Service/tag.service';
import { formatDate } from '../../utils/functionUtils';

function Home() {
    const { data : blogs, isLoading } = useGetBlogsQuery();
    const { data : tags, isLoading: tagLoading} = useGetTopFiveTagsQuery();

    if (isLoading || tagLoading) {
        return <h2>Loading....</h2>
    }

  return (
    <>
        <header className="entry-header">
            <h1><span style={{display:"inline-block", transform:"rotateY(180deg)"}}>🐈</span> Blog app <span>🐈</span></h1>
        </header>
        <ul className="terms-tags top-tags">
            {tags.length > 0 && tags.map((t, i) => (
                <li key={i}><Link to={`/tags/${t.id}/${t.name}`}>{t.name} <sup><strong><sup>{t.used}</sup></strong></sup></Link></li>
            ))}
        </ul>
        {blogs.length > 0 && blogs.map((b, i) => (
            <article className="post-entry" key={i}>
                <header className="entry-header">
                    <h2>{b.title}</h2>
                </header>
                <div className="entry-content">
                    <p>{b.description}</p>
                </div>
                <footer className="entry-footer"><span>{formatDate(b.publishedAt)}</span>
                </footer>
                <Link to={`/blogs/${b.id}`} className="entry-link"></Link>
            </article>
        ))}
        <footer className="page-footer">
            <nav className="pagination"><a className="next" href="#">Trang tiếp theo »</a></nav>
        </footer>
    </>
  )
}

export default Home