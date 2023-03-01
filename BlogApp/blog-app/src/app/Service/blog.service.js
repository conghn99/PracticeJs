import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({ 
      baseUrl: 'http://localhost:8080/api/',
      prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
    
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
          headers.set('authorization', `Bearer ${token}`)
        }
    
        return headers
      }, }),
    endpoints: (builder) => ({
      getBlogs: builder.query({
        query: () => `blogs`,
      }),
      getBlogById: builder.query({
        query: (id) => `blogs/${id}`
      }),
      getBlogsByTagId: builder.query({
        query: (id) => `categories/${id}`
      }),
      getBlogsByKeyword: builder.query({
        query: (keyword) => `blogs/search?keyword=${keyword}`
      })
    }),
})

export const { useGetBlogsQuery, useGetBlogByIdQuery, useGetBlogsByTagIdQuery, useGetBlogsByKeywordQuery } = blogApi