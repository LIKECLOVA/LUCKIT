import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileEditHeader } from '../../components/header/header';
import { AxiosUserData, onChangeIntro, onChangeUserName, onChangeUserImg } from '../../reducers/getUserInfoSlice';
import {
  EditProfilePageWrap,
  EditProfilePageUserInfo,
  EditProFileUserLabel,
  EditProfileUserInput,
  EditProfileTextarea,
  EditProfileImgLabel,
  EditProfileImgInput,
} from './editprofilestyle';

export const EditProfile = () => {
  const fileInput = useRef();
  // 임시 데이터 /////
  
  const accountname = localStorage.getItem('Account Name');
  const URL = `https://mandarin.api.weniv.co.kr/profile/${accountname}`;

  const dispatch = useDispatch(); // 함수 호출해서 액션 요청
  
  const userInfoData = useSelector((state) => state.userInfoSlice.userData); // 받아온 데이터

  // console.log('리덕스에서 받아온 데이터', userInfoData);

  // 내 프로필 정보 리덕스 store에 요청
  useEffect(() => {
    // 비동기 액션 함수를 호출해서 slice안에 있는 데이터를 바꿔주는 것
    dispatch(AxiosUserData(URL));
  }, []);

  // 인풋값 수정 액션 함수
  const onEdit = async (event) => {
    if (event.target.name === 'userName') {
      dispatch(onChangeUserName(event.target.value));
    } else if (event.target.name === 'userInfo') {
      dispatch(onChangeIntro(event.target.value));
    } else if (event.target.name === 'userImg') {
      const newImg = await editImg(event.target.files[0]);

      dispatch(onChangeUserImg(newImg));
    }
  };

  // 이미지 변경 함수
  const editImg = async (imgFile) => {
    const formData = new FormData();

    formData.append('image', imgFile);

    const res = await axios.post('https://mandarin.api.weniv.co.kr/image/uploadfile', formData);

    return `https://mandarin.api.weniv.co.kr/${res.data.filename}`;
  };

  // 프로필 수정 함수
  const userData = {
    user: {
      username: userInfoData.username,
      accountname: userInfoData.accountname,
      intro: userInfoData.intro,
      image: userInfoData.image,
    },
  };

  // 프로필수정
  async function profileSave() {
    try {
      // const token = JSON.parse(localStorage.getItem("token"));
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTA5MzIwMTdhZTY2NjU4MWMwMzNlNyIsImV4cCI6MTY3NjQ0NDc2OSwiaWF0IjoxNjcxMjYwNzY5fQ.PcmkXNY7JTV8PlIYVh9XOCbYhiD789NfFYXrjOQ6_ik';

      await axios.put('https://mandarin.api.weniv.co.kr/user', userData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ProfileEditHeader onClick={profileSave} />
      <EditProfilePageWrap>
        <EditProfilePageUserInfo>
          <EditProfileImgLabel>
            <img
              src={userInfoData.image}
              alt='프로필설정사진'
              onClick={(event) => {
                event.preventDefault();
                return fileInput.current.click();
              }}
            />
            <EditProfileImgInput onChange={onEdit} ref={fileInput} type='file' name='userImg' id='userImg' />
          </EditProfileImgLabel>

          <div className='profiledetail'>
            <EditProFileUserLabel>
              <EditProfileUserInput
                onChange={onEdit}
                value={userInfoData.username}
                type='text'
                id='userName'
                name='userName'
                placeholder='닉네임'
              />
            </EditProFileUserLabel>
            <EditProFileUserLabel>
              <EditProfileUserInput readOnly value={userInfoData.accountname} type='text' id='userID' name='userID' />
            </EditProFileUserLabel>
          </div>
        </EditProfilePageUserInfo>
        <EditProFileUserLabel>To. 나의 럭킷에게</EditProFileUserLabel>
        <EditProfileTextarea
          onChange={onEdit}
          value={userInfoData.intro}
          name='userInfo'
          style={{ resize: 'none' }}
        ></EditProfileTextarea>
      </EditProfilePageWrap>
    </>
  );
};
