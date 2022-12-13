import React from 'react';
import { Header } from '../../components/header/header';
import {
  EditProfilePageWrap,
  EditProfilePageUserInfo,
  EditProFileUserLabel,
  EditProfileUserInput,
  EditProfileTextarea,
} from './editprofilestyle';

export const EditProfile = () => {
  return (
    <>
      <Header />
      <EditProfilePageWrap>
        <EditProfilePageUserInfo>
          <img src='https://mandarin.api.weniv.co.kr/Ellipse.png' alt='프로필설정사진' />
          <div className='profiledetail'>
            <EditProFileUserLabel>
              <EditProfileUserInput type='text' id='userName' name='userName' placeholder='닉네임' />
            </EditProFileUserLabel>
            <EditProFileUserLabel>
              <EditProfileUserInput type='text' id='userID' name='userID' placeholder='아이디' />
            </EditProFileUserLabel>
          </div>
        </EditProfilePageUserInfo>
        <EditProFileUserLabel>To. 나의 럭킷에게</EditProFileUserLabel>
        <EditProfileTextarea name='userInfo' style={{ resize: 'none' }}></EditProfileTextarea>
      </EditProfilePageWrap>
    </>
  );
};
