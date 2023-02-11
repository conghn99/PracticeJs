import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./services/blog.service";
import { categoryApi } from "./services/categories.service";
import { imageApi } from "./services/images.service";
import blogsReducer from "./slices/blog.slice";
import categoriesReducer from "./slices/categories.slice"
import imageReducer from "./slices/image.slice"

const store = configureStore({
    reducer : {
        [blogApi.reducerPath] : blogApi.reducer,
        [categoryApi.reducerPath] : categoryApi.reducer,
        [imageApi.reducerPath] : imageApi.reducer,
        blogs : blogsReducer,
        categories : categoriesReducer,
        images : imageReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(blogApi.middleware, categoryApi.middleware, imageApi.middleware),
})

export default store;