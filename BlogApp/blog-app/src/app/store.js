import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./Service/blog.service";
import { tagApi } from "./Service/tag.service";
import blogsReducer from "./Slice/blog.slice";
import tagsReducer from "./Slice/tag.slice"

const store = configureStore({
    reducer : {
        [blogApi.reducerPath] : blogApi.reducer,
        [tagApi.reducerPath] : tagApi.reducer,
        blogs : blogsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(blogApi.middleware, tagApi.middleware),
})

export default store;