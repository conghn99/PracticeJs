import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({ 
      baseUrl: 'http://localhost:8080/api/admin',
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
      getOwnBlog: builder.query({
        query: () => `blogs/own-blogs`
      }),
      createBlog: builder.mutation({
        query: (data) => ({
            url : "blogs",
            method: "POST",
            body: data
        })
      }),
      updateBlog: builder.mutation({
        query: ({id, ...data}) => ({
            url : `blogs/${id}`,
            method: "PUT",
            body: data
        })
      }),
      deleteBlog: builder.mutation({
        query: (id) => ({
            url: `blogs/${id}`,
            method: "DELETE"
        })
      })
    }),
})

export const { useGetBlogsQuery, useGetBlogByIdQuery, useGetOwnBlogQuery, useCreateBlogMutation, useDeleteBlogMutation, useUpdateBlogMutation } = blogApi