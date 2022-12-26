import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    productList : [],
    status : 'idle'
}

export const AxiosProductList = createAsyncThunk(
    'productList/AxiosProductList',
    async(URL) =>{

      const token = localStorage.getItem('Access Token');
      const config = {
        headers: {
          'Authorization' : `Bearer ${token}`,
          'Content-type' : 'application/json'
        },
      }
      const res = await axios(URL,config);

      return res.data.product;
    }
  )

  export const productListSlice = createSlice({
    name : 'getProductList',
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
      builder
        .addCase(AxiosProductList.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(AxiosProductList.fulfilled, (state,action) => {
          state.status = 'success';
          state.productList = action.payload;
        })
        .addCase(AxiosProductList.rejected,(state) => {
          state.state = 'fail';
        });
    },
  })


