import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userData: {},
  status: 'state',
};

export const AxiosUserData = createAsyncThunk('userdata/axiosUserData', async (URL) => {
  const token = localStorage.getItem('Access Token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
  };
  const res = await axios(URL, config);

  return res.data.profile;
});

// 이미지 업로드 함수
export const AxiosImgUpload = createAsyncThunk('userImg/axiosUserData', async (imgFile) => {
  const formData = new FormData();

  formData.append('image', imgFile);

  const res = await axios.post('https://api.mandarin.weniv.co.kr/image/uploadfile', formData);

  return `https://api.mandarin.weniv.co.kr/${res.data.filename}`;
});

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    onChangeIntro(state, action) {
      state.userData.intro = action.payload;
    },
    onChangeUserName(state, action) {
      state.userData.username = action.payload;
    },
    onChangeFollow(state, action) {
      state.userData.isfollow = action.payload;
    },
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
      })
      .addCase(AxiosImgUpload.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(AxiosImgUpload.fulfilled, (state, action) => {
        state.status = 'success';
        state.userData.image = action.payload;
      })
      .addCase(AxiosImgUpload.rejected, (state) => {
        state.status = 'fail';
      });
  },
});

export const { onChangeIntro, onChangeUserName, onChangeFollow } = userInfoSlice.actions;
