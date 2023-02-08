import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const blogsSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {}
});

export const {} = blogsSlice.actions

export default blogsSlice.reducer