import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async'
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
  // 임시 데이터 /////
  const navigate = useNavigate();
  const accountname = localStorage.getItem('Account Name');
  const token = localStorage.getItem('Access Token');
  const URL = `https://mandarin.api.weniv.co.kr/profile/${accountname}`;
  const dispatch = useDispatch();
  const userInfoData = useSelector((state) => state.userInfoSlice.userData); // 받아온 데이터


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
      // const newImg = await editImg(event.target.files[0]);
      // console.log('확인해봄ㅇㅇㅇ', editImg(event.target.files[0]) );
       
      // dispatch(onChangeUserImg(newImg));
       dispatch(AxiosImgUpload(event.target.files[0]))
    }
  };

  // 이미지 변경 함수
  // const editImg = async (imgFile) => {
  //   const formData = new FormData();

  //   formData.append('image', imgFile);

  //   const res = await axios.post('https://mandarin.api.weniv.co.kr/image/uploadfile', formData);

  //   return `https://mandarin.api.weniv.co.kr/${res.data.filename}`;
  // };

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
      console.log('ㅇㅇ',error);
    }
  }

  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>LUCKIT - 프로필 설정</title>
        <meta name='description' content='럭킷 프로필설정 페이지입니다. 내 프로필을 설정해보세요! '/>
        </Helmet>
    </HelmetProvider>
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
