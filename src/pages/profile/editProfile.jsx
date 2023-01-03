import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ProfileEditHeader } from '../../components/header/header';
import { AxiosUserData, onChangeIntro, onChangeUserName, AxiosImgUpload} from '../../reducers/getUserInfoSlice';
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
  const navigate = useNavigate();
  const accountname = localStorage.getItem('Account Name');
  const token = localStorage.getItem('Access Token');
  const URL = `https://mandarin.api.weniv.co.kr/profile/${accountname}`;
  const dispatch = useDispatch();
  const userInfoData = useSelector((state) => state.userInfoSlice.userData); 

  useEffect(() => {
    dispatch(AxiosUserData(URL));
  }, []);

  // input 값 수정 함수
  const onEdit = async (event) => {
    if (event.target.name === 'userName') {
      dispatch(onChangeUserName(event.target.value));
    } else if (event.target.name === 'userInfo') {
      dispatch(onChangeIntro(event.target.value));
    } else if (event.target.name === 'userImg') {
       dispatch(AxiosImgUpload(event.target.files[0]))
    }
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

      await axios.put('https://mandarin.api.weniv.co.kr/user', userData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        }
      }).then( navigate(`/profile/${accountname}`) )
    } catch (error) {
      console.log('error',error);
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
                value={userInfoData.username || ''}
                type='text'
                id='userName'
                name='userName'
                placeholder='닉네임'
                maxLength={10}
              />
            </EditProFileUserLabel>
            <EditProFileUserLabel>
              <EditProfileUserInput readOnly value={userInfoData.accountname || '' } type='text' id='userID' name='userID' />
            </EditProFileUserLabel>
          </div>
        </EditProfilePageUserInfo>
        <EditProFileUserLabel>To. 나의 럭킷에게</EditProFileUserLabel>
        <EditProfileTextarea
          onChange={onEdit}
          value={userInfoData.intro || '' }
          name='userInfo'
          style={{ resize: 'none' }}
        ></EditProfileTextarea>
      </EditProfilePageWrap>
    </>
  );
};
