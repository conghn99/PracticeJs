import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./Service/auth.service";
import { blogApi } from "./Service/blog.service";
import { tagApi } from "./Service/tag.service";
import blogsReducer from "./Slice/blog.slice";
import authReducer from "./Slice/auth.slice"

const store = configureStore({
    reducer : {
        [blogApi.reducerPath] : blogApi.reducer,
        [tagApi.reducerPath] : tagApi.reducer,
        [authApi.reducerPath] : authApi.reducer,
        blogs : blogsReducer,
        auth : authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(blogApi.middleware, tagApi.middleware, authApi.middleware),
})

export default store;