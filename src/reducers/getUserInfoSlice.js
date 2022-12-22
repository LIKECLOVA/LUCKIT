import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios';

const initialState = {
    userData: {},
    status: 'state',
}


export const AxiosUserData = createAsyncThunk(
    'userdata/axiosUserData',
    async (URL) => {
      const token = localStorage.getItem("Access Token");
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
    name:'userInfo',
    initialState,
    reducers:{
      onChangeIntro(state,action){
          state.userData.intro = action.payload
      },
      onChangeUserName(state,action){
          state.userData.username = action.payload
      },
      onChangeUserImg(state,action){
          state.userData.image = action.payload
      }
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

export const {onChangeIntro, onChangeUserName , onChangeUserImg} = userInfoSlice.actions