import { createSlice } from '@reduxjs/toolkit'
import { getDatatFromLocalStorage, setDataToLocalStorage } from '../../utils/localStorageUtils';
import { authApi } from '../Service/auth.service';

const defaultState = {
    auth : null,
    token : null,
    isAuthenticated : false
}

const initialState = getDatatFromLocalStorage("authBlog") ? getDatatFromLocalStorage("authBlog") : defaultState

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers : (builder) => {
    builder.addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, action) => {
            state.auth = action.payload.auth
            state.token = action.payload.token
            state.isAuthenticated = action.payload.isAuthenticated

            // TODO : can luu vao localStorage
            setDataToLocalStorage("authBlog", state)
        }
    )
  }
});

export const {} = authSlice.actions

export default authSlice.reducer