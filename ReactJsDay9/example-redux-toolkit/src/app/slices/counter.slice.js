import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value : 0
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment : (state, action) =>  {
        state.value += 1
    },

    decrement : (state, action) => {
        state.value -= 1
    }
  }
});

// increment, decrement : action creator
// name + increment => action type : "counter/increment"
// thay doi truc tiep state => su dung Immer.js

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer