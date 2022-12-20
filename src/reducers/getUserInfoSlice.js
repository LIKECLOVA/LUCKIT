import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios';

const initialState = {
    userData: {}
}


export const AxiosUserData = createAsyncThunk(
    'userdata/axiosUserData',
    async (URL) => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTA5MzIwMTdhZTY2NjU4MWMwMzNlNyIsImV4cCI6MTY3NjQ0NDc2OSwiaWF0IjoxNjcxMjYwNzY5fQ.PcmkXNY7JTV8PlIYVh9XOCbYhiD789NfFYXrjOQ6_ik';
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-type': 'application/json'
        },
      }
      const res = await axios(URL, config);

      return res.data.profile;
    }
  )


export const userInfoSlice = createSlice({
    name:'유저정보',
    initialState,
    reducers:{
        
    },
    extraReducers: (builder) => {
        builder
          .addCase(AxiosUserData.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(AxiosUserData.fulfilled, (state, action) => {
            state.status = 'success';
            state.userData = action.payload;
          })
          .addCase(AxiosUserData.rejected, (state) => {
            state.status = 'fail';
          });
      },
})