import React, { useEffect, useRef, useState } from 'react';
import { NextBtn } from '../button/button';
import {ImgUploadBtn} from '../button/iconBtn';
import {
  ProfileInput,
  ProfileLabel,
  JoinProfileWrap,
  ProfileTextarea,
  ProfileImgLabel,
  ProfileImgInput,
} from './joinprofilestyle';
import profileDefaultImg from '../../assets/icon/basic-profile-img-.png';

const JoinProfile = () => {
  /*  이메일 회원가입 컴포넌트 > 회원가입시 프로필 설정 > 회원가입이 된다. */

  const fileInput = useRef();
  /* 회원가입시 데이터 */
  const [data, setData] = useState({
    이미지: profileDefaultImg,
  });

  /* 프로필 사진 서버 등록 함수 */
  const postImg = async (event) => {
    const imageFile = event.target.files[0];
   
    const formData = new FormData();

    formData.append('image', imageFile);

    const res = await fetch('https://mandarin.api.weniv.co.kr/image/uploadfile', {
      method: 'POST',
      body: formData,
    });

    const json = await res.json();

    setData((v) => {
      return { ...v, 이미지: `https://mandarin.api.weniv.co.kr/${json.filename}` };
    });
  };

  /* ****** 닉네임,아이디 유효성 검사 ******** */

  /* userName 유효성 검사 */
  const [userName, setUserName] = useState('');
  const [UserNameWarningMessage,setUserNameWarningMessage] = useState('');
  
  useEffect(() => {

    if( (userName.length < 2 && userName !== '') || userName.length > 10 ){
       setUserNameWarningMessage('2자~10자 이내여야 합니다.')
    } 
    else if (userName === '') {
     setUserNameWarningMessage('')
    }
    else{
      setUserNameWarningMessage('')
    }
    

  }, [userName]);


  /* userID 유효성 검사 */
  const [userId, setuserId] = useState('');
  const [UserIDWarningMessage ,setUserIDWarningMessage] = useState('');

  useEffect(() => {
      const regExp = /^[a-zA-Z0-9_.,()]{1,}$/;
      
      if (!regExp.test(userId) && userId !== '') {
        setUserIDWarningMessage('영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.')
      }
      else{
        setUserIDWarningMessage('')
      }

  },[userId])


/* 아이디 이메일 input값 변경 함수 */
  const onChangeHandler = (event) => {

    if (event.target.name === 'userName') {
      setUserName(event.target.value);
    }
    else if(event.target.name === 'userId'){
      setuserId(event.target.value);
    }

  };

  /* 이미지 변경 함수 */
  const changeImg = () => {
    fileInput.current.click();
  }

  return (
    <>
      <JoinProfileWrap>
        <h2>반가워요!</h2>
        <p className='title'>프로필을 설정해볼까요?</p>
        <p className='title'>나중에 언제든지 변경할 수 있습니다.</p>
        <div className='profileMidWrap'>
          <ProfileImgLabel htmlFor='joinProfileImg'>
            <img
              src={data.이미지}
              alt='프로필 사진'
              onClick={(event) => {
                event.preventDefault();
                return fileInput.current.click();
              }}
            />
            <ProfileImgInput onChange={postImg} ref={fileInput} type='file' id='joinProfileImg' />
            <ImgUploadBtn click={changeImg} posi='in'/>
          </ProfileImgLabel>
          <div>
            <ProfileLabel>
              <ProfileInput onChange={onChangeHandler} value={userName} placeholder='닉네임' type='text' name='userName' required />
              <p className='message'>{UserNameWarningMessage}</p>
            </ProfileLabel>
            <ProfileLabel>
              <ProfileInput onChange={onChangeHandler} value={userId} placeholder='아이디' type='text' name='userId' />
              <p className='message'>{UserIDWarningMessage}</p>
            </ProfileLabel>
          </div>
        </div>

        <ProfileLabel>To. 나의 럭킷에게</ProfileLabel>
        <ProfileTextarea name='userInfo' style={{ resize: 'none' }} />
        <div className='buttonFlexBox'>
          <NextBtn size={'large'} />
        </div>
      </JoinProfileWrap>
    </>
  );
};

export default JoinProfile;
