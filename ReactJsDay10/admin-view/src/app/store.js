import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./services/blog.service";
import { categoryApi } from "./services/categories.service";
import blogsReducer from "./slices/blog.slice";
import categoriesReducer from "./slices/categories.slice"

const store = configureStore({
    reducer : {
        [blogApi.reducerPath] : blogApi.reducer,
        [categoryApi.reducerPath] : categoryApi.reducer,
        blogs : blogsReducer,
        categories : categoriesReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(blogApi.middleware, categoryApi.middleware),
})

export default store;