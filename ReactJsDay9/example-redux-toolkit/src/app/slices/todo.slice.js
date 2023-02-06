import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id : 1, title : "da bong", status : false},
    {id : 2, title : "an toi", status : true},
    {id : 3, title : "ngu", status : false}
]

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
        state.push(action.payload)
    },

    updateTodo: (state, action) => {
        const {id} = action.payload; // lay ra id trong object action.payload
        const index = state.findIndex(todo => todo.id === id)
        state[index] = action.payload // gan lai gia tri cua phan tu tai vi tri index
    },

    deleteTodo: (state, action) => {
        const {id} = action.payload; // lay ra id trong object action.payload
        const index = state.findIndex(todo => todo.id === id)
        state.splice(index, 1)
    }
  }
});

export const {addTodo, updateTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer