import React from 'react'
import { Link } from 'react-router-dom';
import { useGetTagsQuery } from '../../app/Service/tag.service'

function Tags() {
  const { data, isLoading } = useGetTagsQuery();

  if (isLoading) {
    return <h2>Loading....</h2>
  }

  return (
    <>
        <header className="page-header">
            <h1>Tags</h1>
        </header>
        <ul className="terms-tags">
          {data.length > 0 && data.map((t, i) => (
            <li key={i}><Link to={`/tags/${t.id}/${t.name}`} >{t.name} <sup><strong><sup>{t.used}</sup></strong></sup></Link></li>
          ))}
        </ul>
    </>
  )
}

export default Tags