import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
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
      getCategories: builder.query({
        query: () => `categories`,
      }),
      updateCategory: builder.mutation({
        query: ({id, ...data}) => ({
            url : `categories/${id}`,
            method: "PUT",
            body: data
        })
      }),
      deleteCategory: builder.mutation({
        query: (id) => ({
            url: `categories/${id}`,
            method: "DELETE"
        })
      })
    }),
})

export const { useGetCategoriesQuery, useUpdateCategoryMutation, useDeleteCategoryMutation } = categoryApi