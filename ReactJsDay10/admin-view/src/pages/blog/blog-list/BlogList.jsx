import React, { useState } from 'react'
import { useGetBlogsQuery } from '../../../app/services/blog.service'

function BlogList() {
    const {data, isLoading} = useGetBlogsQuery();

    // so luong item tren 1 trang
    const  itemsPerPage = 10;

    // Vi tri bat dau
    const [itemOffset, setItemOffset] = useState(0);

    if (isLoading) {
        return<h2>Loading...</h2>
    }

    
  return (
    <div>BlogList</div>
  )
}

export default BlogList