import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/public/auth' }),
    endpoints: (builder) => ({
      login: builder.mutation({
        query: (data) => ({
            url: "login",
            method: "POST",
            body: data
        }),
      }),
    }),
})

export const { useLoginMutation } = authApi