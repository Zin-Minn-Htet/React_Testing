import { createSlice } from "@reduxjs/toolkit";

const loggedSlice = createSlice({
    name: "loggedIn",
    initialState:{
        value: false
    },
    reducers:{
        login : (state,action) => {
            state.value = action.payload
        },
        logout : (state,action) => {
            state.value = action.payload
        }
    }
})

export const {login,logout} = loggedSlice.actions;
export default loggedSlice.reducer