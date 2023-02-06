import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./slices/counter.slice"
import todoReducer from "./slices/todo.slice"

const store = configureStore({
    reducer: {
        counter : counterReducer,
        todo : todoReducer
    }
})

export default store