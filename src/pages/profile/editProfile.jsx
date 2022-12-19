 import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import { ProfileEditHeader } from '../../components/header/header';
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
 
  const [profileImg, setProfileImg] = useState('');
  const [userName, setUserName] = useState('');
  const [userID, setUserID] = useState('');
  const [userIntro, setUserIntro] = useState('');
  const fileInput = useRef();
  // 임시 데이터
  const accountname = 'fffffff'
  const URL = `https://mandarin.api.weniv.co.kr/profile/${accountname}`;
  const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTA5MzIwMTdhZTY2NjU4MWMwMzNlNyIsImV4cCI6MTY3NjQ0NDc2OSwiaWF0IjoxNjcxMjYwNzY5fQ.PcmkXNY7JTV8PlIYVh9XOCbYhiD789NfFYXrjOQ6_ik';
  

  // 내 프로필 정보 가져오는 함수
  const getMyProfileInfo = async () => {

    await axios.get( URL, {
      headers: { Authorization : `Bearer ${token}` }
     }
      ).then(data => {
        
        setProfileImg(data.data.profile.image);
        setUserName(data.data.profile.accountname);
        setUserID(data.data.profile.username);
        setUserIntro(data.data.profile.intro)
      })
  
  }

  useEffect(()=>{
    getMyProfileInfo();
   
  },[])




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
              <EditProfileUserInput  value={userID} type='text' id='userName' name='userName' placeholder='닉네임' />
            </EditProFileUserLabel>
            <EditProFileUserLabel>
              <EditProfileUserInput value={userName} type='text' id='userID' name='userID' placeholder='아이디' />
            </EditProFileUserLabel>
          </div>
          
        </EditProfilePageUserInfo>
        <EditProFileUserLabel>To. 나의 럭킷에게</EditProFileUserLabel>
        <EditProfileTextarea value={userIntro} name='userInfo' style={{ resize: 'none' }}></EditProfileTextarea>
      </EditProfilePageWrap>
    </>
  );
};
