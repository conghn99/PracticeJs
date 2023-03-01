import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/auth.service";
import { blogApi } from "./services/blog.service";
import { categoryApi } from "./services/categories.service";
import { imageApi } from "./services/images.service";
import blogsReducer from "./slices/blog.slice";
import categoriesReducer from "./slices/categories.slice"
import imageReducer from "./slices/image.slice"
import authReducer from "./slices/auth.slice"

const store = configureStore({
    reducer : {
        [blogApi.reducerPath] : blogApi.reducer,
        [categoryApi.reducerPath] : categoryApi.reducer,
        [imageApi.reducerPath] : imageApi.reducer,
        [authApi.reducerPath] : authApi.reducer,
        auth : authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(blogApi.middleware, categoryApi.middleware, imageApi.middleware, authApi.middleware),
})

export default store;