import { configureStore } from "@reduxjs/toolkit";
import { userInfoSlice } from "./reducers/getUserInfoSlice";
import { productListSlice } from "./reducers/getProductListSlice";
import { followInfoSlice } from "./reducers/getFollowSlice";
import { snsPostSlice } from "./reducers/getSnsPostSlice";

export const store =  configureStore({
    reducer:{
        userInfoSlice : userInfoSlice.reducer,
        productListSlice : productListSlice.reducer,
        followInfoSlice: followInfoSlice.reducer,
        snsPostSlice : snsPostSlice.reducer
    }
})