// import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { ProfileEditHeader } from '../../components/header/header';
import { AxiosUserData } from '../../reducers/getUserInfoSlice';
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
  // ////
  
  // /////
  const [profileImg, setProfileImg] = useState('ㅁ');
  const [userName, setUserName] = useState('');
  const [userID, setUserID] = useState('');
  const [userIntro, setUserIntro] = useState('');
  const fileInput = useRef();
  // 임시 데이터
  const accountname = 'fffffff'
  const URL = `https://mandarin.api.weniv.co.kr/profile/${accountname}`;

  const dispatch = useDispatch(); // 함수 호출해서 액션 요청

  const userInfoData = useSelector(state => state.userInfoSlice.userData); // 받아온 데이터

  console.log('리덕스에서 받아온 데이터', userInfoData);
  console.log('이게문제에!!', profileImg);

  // 내 프로필 정보 리덕스 store에 요청
  useEffect(()=>{
    // 액션 함수를 호출해서 slice안에 있는 데이터를 바꿔주는 것 
    dispatch(AxiosUserData(URL));
    setProfileImg(userInfoData.image);
    setUserName(userInfoData.accountname);
    setUserID(userInfoData.username);
    setUserIntro(userInfoData.intro)
   
  },[]);

  const ontest = () => {
    console.log(1);
  };

  return (
    <>
      <ProfileEditHeader />
      <EditProfilePageWrap>
        <EditProfilePageUserInfo>
          <EditProfileImgLabel>
            <img src ={profileImg} alt='프로필설정사진' onClick={(event) => {
                event.preventDefault();
                return fileInput.current.click();
              }} />
            <EditProfileImgInput ref={fileInput} type='file' />
          </EditProfileImgLabel>

          <div className='profiledetail'>
            <EditProFileUserLabel>
              <EditProfileUserInput onChange={ontest} value={userID} type='text' id='userName' name='userName' placeholder='닉네임' />
            </EditProFileUserLabel>
            <EditProFileUserLabel>
              <EditProfileUserInput onChange={ontest} value={userName} type='text' id='userID' name='userID' placeholder='아이디' />
            </EditProFileUserLabel>
          </div>
          
        </EditProfilePageUserInfo>
        <EditProFileUserLabel>To. 나의 럭킷에게</EditProFileUserLabel>
        <EditProfileTextarea value={userIntro} name='userInfo' style={{ resize: 'none' }}></EditProfileTextarea>
      </EditProfilePageWrap>
    </>
  );
};
