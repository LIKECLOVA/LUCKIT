import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  followData: [],
  status: 'idle',
};

export const AxiosFollow = createAsyncThunk('follow/axiosfollow', async (URL) => {
  const token = localStorage.getItem('Access Token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
  };
  const res = await axios(URL, config)

  return res.data;
});

export const followInfoSlice = createSlice({
  name: 'getFollow',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AxiosFollow.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(AxiosFollow.fulfilled, (state, action) => {
        state.status = 'success';
        state.followData = action.payload;
      })
      .addCase(AxiosFollow.rejected, (state) => {
        state.state = 'fail';
      });
  },
});
