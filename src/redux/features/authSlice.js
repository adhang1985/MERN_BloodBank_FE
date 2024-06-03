import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    token:null,
    user:null,
    error:null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder) => {},
});

export default authSlice;