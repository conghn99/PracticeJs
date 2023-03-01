import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tagApi = createApi({
    reducerPath: 'tagApi',
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
      getTags: builder.query({
        query: () => `categories`,
      }),
      getTopFiveTags: builder.query({
        query: () => `categories/top5`
      }),
    }),
})

export const { useGetTagsQuery, useGetTopFiveTagsQuery } = tagApi