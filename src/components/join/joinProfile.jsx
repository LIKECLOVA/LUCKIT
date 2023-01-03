import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProfileNextBtn } from '../button/button';
import { ImgUploadBtn } from '../button/iconBtn';
import {
  ProfileInput,
  ProfileLabel,
  JoinProfileWrap,
  ProfileTextarea,
  ProfileImgLabel,
  ProfileImgInput,
} from './joinprofilestyle';

const JoinProfile = () => {
  const fileInput = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state.email;
  const password = location.state.password;
  const [intro, setIntro] = useState('');
  const [profileImage, setProfileImg] = useState('https://mandarin.api.weniv.co.kr/1671587008626.png');

  /* 프로필 사진 서버 업로드 함수 */

  const postImg = async (event) => {
    const imageFile = event.target.files[0];

    const formData = new FormData();

    formData.append('image', imageFile);

    const res = await fetch('https://mandarin.api.weniv.co.kr/image/uploadfile', {
      method: 'POST',
      body: formData,
    });

    const json = await res.json();

    setProfileImg(`https://mandarin.api.weniv.co.kr/${json.filename}`);
  };

  /* ****** 닉네임,아이디 유효성 검사 ******** */

  /* userName 유효성 검사 */
  const [userName, setUserName] = useState('');
  const [UserNameWarningMessage, setUserNameWarningMessage] = useState('');
  const [checkValidatedUserName, setCheckValidatedUserName] = useState(true);

  useEffect(() => {
    if ((userName.length < 2 && userName !== '') || userName.length > 10) {
      setUserNameWarningMessage('2자~10자 이내여야 합니다.');
      setCheckValidatedUserName(false);
    } else if (userName === '') {
      setUserNameWarningMessage('닉네임을 입력해주세요');
      setCheckValidatedUserName(false);
    } else {
      setUserNameWarningMessage('');
      setCheckValidatedUserName(true);
    }
  }, [userName]);

  /* userID 유효성 검사 */
  const [userId, setuserId] = useState('');
  const [UserIDWarningMessage, setUserIDWarningMessage] = useState('');
  const [checkValidatedId, setCheckValidatedId] = useState(true);

  useEffect(() => {
    const regExp = /^[a-zA-Z0-9_.,()]{1,}$/;

    if (!regExp.test(userId) && userId !== '') {
      setUserIDWarningMessage('영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.');
      setCheckValidatedId(false);
    } else if (userId === '') {
      setUserIDWarningMessage('아이디를 입력해주세요');
      setCheckValidatedId(false);
    } else {
      setUserIDWarningMessage('');
      setCheckValidatedId(true);
    }
  }, [userId]);

  /* 아이디 이메일,소개글 input값 변경 함수 */
  const onChangeHandler = (event) => {
    if (event.target.name === 'userName') {
      setUserName(event.target.value);
    } else if (event.target.name === 'userId') {
      setuserId(event.target.value);
    } else if (event.target.name === 'userInfo') {
      setIntro(event.target.value);
    }
  };

  /* 이미지 변경 함수 */
  const changeImg = () => {
    fileInput.current.click();
  };

  /* 회원가입시 데이터 */
  const data = {
    user: {
      username: userName,
      email: email,
      password: password,
      accountname: userId,
      intro: intro,
      image: profileImage,
    },
  };

  /* 버튼 활성화 기능 */
  const possibleJoin = checkValidatedId && checkValidatedUserName;

  /* 회원가입 함수, 아이디 중복 검사 포함  */

  const join = async () => {
    const res = await axios.post('https://mandarin.api.weniv.co.kr/user/accountnamevalid', {
      user: {
        accountname: userId,
      },
    });

    if (res.data.message === '사용 가능한 계정ID 입니다.') {
      await axios
        .post('https://mandarin.api.weniv.co.kr/user', data, {
          'Content-type': 'application/json',
        })
        .then((response) => navigate('/login'));
    } else if (res.data.message === '이미 가입된 계정ID 입니다.') {
      alert('이미 가입된 계정 ID 입니다');
    } else {
      alert('잘못된 접근입니다.');
    }
  };

  return (
    <>
      <JoinProfileWrap>
        <h2>반가워요!</h2>
        <p className='title'>프로필을 설정해볼까요?</p>
        <p className='title'>나중에 언제든지 변경할 수 있어요!</p>
        <div className='profileMidWrap'>
          <ProfileImgLabel htmlFor='joinProfileImg'>
            <img
              src={profileImage}
              alt='프로필 사진'
              onClick={(event) => {
                event.preventDefault();
                return fileInput.current.click();
              }}
            />
            <ProfileImgInput onChange={postImg} ref={fileInput} type='file' id='joinProfileImg' />
            <ImgUploadBtn click={changeImg} posi='profileIn' />
          </ProfileImgLabel>
          <div>
            <ProfileLabel>
              <ProfileInput
                onChange={onChangeHandler}
                value={userName}
                placeholder='닉네임'
                type='text'
                name='userName'
                required
                maxLength={11}
              />
              <p className='message'>{UserNameWarningMessage}</p>
            </ProfileLabel>
            <ProfileLabel>
              <ProfileInput
                maxLength={12}
                onChange={onChangeHandler}
                value={userId}
                placeholder='아이디'
                type='text'
                name='userId'
              />
              <p className='message'>{UserIDWarningMessage}</p>
            </ProfileLabel>
          </div>
        </div>
        <ProfileLabel>To. 나의 럭킷에게</ProfileLabel>
        <ProfileTextarea onChange={onChangeHandler} value={intro} name='userInfo' style={{ resize: 'none' }} />
        <div className='buttonFlexBox'>
          <ProfileNextBtn disabled={possibleJoin ? null : 'disabled'} onClick={join} size={'large'} />
        </div>
      </JoinProfileWrap>
    </>
  );
};

export default JoinProfile;
