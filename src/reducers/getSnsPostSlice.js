import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  snspost: [],
  status: 'idle',
};

export const AxiosSnsPost = createAsyncThunk(
    'snspost/AxiosSnsPost', async (URL) => {
  const token = localStorage.getItem('Access Token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
  };
  const res = await axios(URL,config);
  
  return res.data.post
});

export const snsPostSlice = createSlice({
  name: 'getSnsPost',
  initialState: initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder
      .addCase(AxiosSnsPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(AxiosSnsPost.fulfilled, (state,action) => {
        state.status = 'success';
        state.snspost = action.payload;
      })
      .addCase(AxiosSnsPost.rejected,(state) => {
        state.state = 'fail';
      });
  },
});
