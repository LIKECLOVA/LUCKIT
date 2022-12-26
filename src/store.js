import { configureStore } from "@reduxjs/toolkit";
import { userInfoSlice } from "./reducers/getUserInfoSlice";
import { productListSlice } from "./reducers/getProductListSlice";

export const store =  configureStore({
    reducer:{
        userInfoSlice : userInfoSlice.reducer,
        productListSlice : productListSlice.reducer
    }
})