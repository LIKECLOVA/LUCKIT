import { configureStore } from "@reduxjs/toolkit";
import { userInfoSlice } from "./reducers/getUserInfoSlice";


export const store =  configureStore({
    reducer:{
        userInfoSlice : userInfoSlice.reducer
    }
})