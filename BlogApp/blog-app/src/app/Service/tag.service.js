import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tagApi = createApi({
    reducerPath: 'tagApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
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