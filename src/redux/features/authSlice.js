import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, userLogin, userRegister } from "./authActions";

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

const initialState = {
    loading:false,
    token,
    user:null,
    error:null
}

const authSlice = createSlice({
    name:"auth1",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(userLogin.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(userLogin.fulfilled,(state,{payload}) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.token;
            console.log(state.user);
        })
        builder.addCase(userLogin.rejected,(state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
        builder.addCase(userRegister.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        builder.addCase(userRegister.fulfilled,(state, {payload}) => {
            state.loading = false;
            state.user = payload.newUser;
        })
        builder.addCase(userRegister.rejected,(state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
        builder.addCase(getCurrentUser.pending, (state) => {
            state.loading = true;
            state.error = null;
          });
          builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.user = payload.user;
          });
          builder.addCase(getCurrentUser.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
          });
    },
});

export default authSlice;